import * as got from "got";
import * as cheerio from "cheerio";
import * as _ from "lodash";
import { allCivs } from "./static";
import { nameForWiki } from "./util";
import { TechTree, baseTechTree } from "../sources/wiki/data/techs";
import { Civ, Characteristics } from "../sources/wiki/wiki";

interface ImageInfo {
  name: string;
  url: string;
}

interface WikiResult {
  civs: Civ[];
  civImages: ImageInfo[];
  techImages: ImageInfo[];
}

export async function scrapeWiki(): Promise<WikiResult> {
  let techImages: ImageInfo[] = [];
  const civImages: ImageInfo[] = [];
  let i = 0;
  const civs = await Promise.all(
    allCivs.map(async (civ) => {
      const pages = await getWikiPages(civ);
      console.log(`done fetching ${civ} - ${++i} of ${allCivs.length}`);
      const characteristics = parseMainPage(pages.main, civ, civImages);
      const techTree = parseTechPage(pages.tech, techImages);
      const civInfo: Civ = { name: civ, characteristics, techTree };
      return civInfo;
    })
  );

  techImages = _.uniqBy(techImages, (e) => e.name);

  return { civs, civImages, techImages };
}

async function getWikiPages(
  civ: string
): Promise<{ main: string; tech: string }> {
  let url = `https://ageofempires.fandom.com/wiki/${civ}`;
  const mainRes = await got(url);

  let main: string;
  if (mainRes.body.includes('id="disambigbox"')) {
    url = `${url}_(Age_of_Empires_II)`;
    const newRes = await got(url);
    main = newRes.body;
  } else {
    main = mainRes.body;
  }

  const techRes = await got(`${url}/Tree`);

  return { main, tech: techRes.body };
}

const extractNameAndDesc = (str: string) => {
  const res = />\s*(?<name>.+?): (?<desc>.+)/.exec(str);
  if (!res) throw Error(`Could not extract name and desc from ${str}`);
  return { name: cleanWikiText(res[1]), description: cleanWikiText(res[2]) };
};

const getUniqueUnitsSection = ($: CheerioStatic) => {
  const singular = $("#Unique_unit");
  if (singular.length === 0) {
    const plural = $("#Unique_units");
    if (plural.length === 0) throw Error("Could not find unique units text");
    else return plural;
  } else {
    return singular;
  }
};

const cleanWikiText = (str: string) => {
  return str.trim().replace(/\[\d*\]/g, "");
};

function parseMainPage(
  page: string,
  civName: string,
  civImages: ImageInfo[]
): Characteristics {
  const $ = cheerio.load(page);

  const icon = $(`img[data-image-key="CivIcon-${civName}.png"]`);
  if(icon.length === 0) throw Error(`Could not find icon for ${civName}`);
  civImages.push({ name: civName, url: icon.attr("src") });

  const uniqueUnits = getUniqueUnitsSection($)
    .parent()
    .next()
    .children()
    .toArray()
    .map((c) => $(c).text())
    .map(extractNameAndDesc);
  const { name: castleName, description: castleDesc } = extractNameAndDesc(
    $("#Unique_technologies").parent().next().children().first().text()
  );
  const { name: impName, description: impDesc } = extractNameAndDesc(
    $("#Unique_technologies").parent().next().children().first().next().text()
  );

  const civBonuses = $("#Civilization_bonuses")
    .parent()
    .next()
    .children()
    .toArray()
    .map((c) => $(c).text())
    .map(cleanWikiText);

  const teamBonus = $("#Team_bonus")
    .parent()
    .next()
    .children()
    .toArray()
    .map((c) => $(c).text())
    .map(cleanWikiText)[0];

  return {
    uniqueUnits,
    uniqueTechs: {
      castleAge: {
        name: castleName,
        description: castleDesc,
      },
      imperialAge: {
        name: impName,
        description: impDesc,
      },
    },
    civBonuses,
    teamBonus,
  };
}

function checkIfMissing(
  $: CheerioStatic,
  thing: string,
  techImages: ImageInfo[]
) {
  const prefix = nameForWiki(thing);
  const availableName = `${prefix}available`;
  const unavailableName = `${prefix}unavailable`;
  const hasThing = $(`img[alt="${availableName}"]`);
  const missingThing = $(`img[alt="${unavailableName}"]`);

  if (hasThing.length === 0 && missingThing.length === 0)
    throw Error(`Could not find whether they have ${thing}`);

  if (hasThing.length > 0) {
    techImages.push({ name: availableName, url: hasThing.attr("data-src") });
  } else {
    techImages.push({
      name: unavailableName,
      url: missingThing.attr("data-src"),
    });
  }

  return missingThing.length === 1;
}

function parseTechPage(page: string, techImages: ImageInfo[]): TechTree {
  const $ = cheerio.load(page);
  const techTree = baseTechTree();
  Object.entries(techTree).forEach(([building, tree]) => {
    Object.keys(tree).forEach((tech) => {
      const isMissing = checkIfMissing($, tech, techImages);
      if (isMissing) techTree[building][tech] = false;
    });
  });
  return techTree;
}
