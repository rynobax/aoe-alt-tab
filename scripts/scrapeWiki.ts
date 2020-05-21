import * as got from "got";
import * as cheerio from "cheerio";
import * as _ from "lodash";
import { allCivs } from "./static";
import { nameForWiki } from "./util";
import { TechTree, baseTechTree } from "../sources/wiki/data/techs";

interface Characteristics {
  uniqueUnits: Array<{
    name: string;
    description: string;
  }>;
  uniqueTechs: {
    castleAge: {
      name: string;
      description: string;
    };
    imperialAge: {
      name: string;
      description: string;
    };
  };
  civBonuses: string[];
  teamBonuses: string[];
}

export interface Civ {
  name: string;
  characteristics: Characteristics;
  techTree: TechTree;
}

interface TechImage {
  name: string;
  url: string;
}

interface WikiResult {
  civs: Civ[];
  techImages: TechImage[];
}

export async function scrapeWiki(): Promise<WikiResult> {
  let techImages: TechImage[] = [];
  let i = 0;
  const civs = await Promise.all(
    allCivs.map(async (civ) => {
      const pages = await getWikiPages(civ);
      console.log(`done fetching ${civ} - ${++i} of ${allCivs.length}`);
      const characteristics = parseMainPage(pages.main);
      const techTree = parseTechPage(pages.tech, techImages);
      const civInfo: Civ = { name: civ, characteristics, techTree };
      return civInfo;
    })
  );

  techImages = _.uniqBy(techImages, (e) => e.name);

  return { civs, techImages };
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
  return { name: res[1], description: res[2] };
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

function parseMainPage(page: string): Characteristics {
  const $ = cheerio.load(page);

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
    .map((e) => (e as string).trim());

  const teamBonuses = $("#Team_bonus")
    .parent()
    .next()
    .children()
    .toArray()
    .map((c) => $(c).text())
    .map((e) => (e as string).trim());

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
    teamBonuses,
  };
}

function checkIfMissing(
  $: CheerioStatic,
  thing: string,
  techImages: TechImage[]
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

function parseTechPage(page: string, techImages: TechImage[]): TechTree {
  const $ = cheerio.load(page);
  const techTree = baseTechTree();
  Object.entries(techTree).forEach(([building, tree]) => {
    if ("units" in tree) {
      Object.keys(tree.units).forEach((unit) => {
        const isMissing = checkIfMissing($, unit, techImages);
        if (isMissing) techTree[building].units[unit] = false;
      });
    }
    if ("techs" in tree) {
      Object.keys(tree.techs).forEach((tech) => {
        const isMissing = checkIfMissing($, tech, techImages);
        if (isMissing) techTree[building].techs[tech] = false;
      });
    }
  });
  return techTree;
}