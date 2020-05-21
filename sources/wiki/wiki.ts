import * as got from "got";
import * as cheerio from "cheerio";
import * as _ from "lodash";

import { allCivs } from "./constants/civlist";
import { baseTechTree, TechTree } from "./constants/techs";

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

interface Civ {
  name: string;
  characteristics: Characteristics;
  techTree: TechTree;
}

export const createWiki = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const civs = await Promise.all(
    allCivs.map(async (civ) => {
      const pages = await getWikiPages(civ);
      const characteristics = parseMainPage(pages.main);
      const techTree = parseTechPage(pages.tech);
      const civInfo: Civ = { name: civ, characteristics, techTree };
      return civInfo;
    })
  );
  civs.forEach((civ) => {
    const node = {
      ...civ,
      id: createNodeId(`Civ-${civ.name}`),
      internal: {
        type: "Civ",
        contentDigest: createContentDigest(civ),
      },
    };
    actions.createNode(node);
  });
};

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

function checkIfMissing($: CheerioStatic, thing: string) {
  const prefix = _.capitalize(thing.toLowerCase());
  const hasUnit = $(`img[alt="${prefix}available"]`);
  const missingUnit = $(`img[alt="${prefix}unavailable"]`);

  if (hasUnit.length === 0 && missingUnit.length === 0)
    throw Error(`Could not find whether they have ${thing}`);

  return missingUnit.length === 1;
}

function parseTechPage(page: string): TechTree {
  const $ = cheerio.load(page);
  const techTree = baseTechTree();
  Object.entries(techTree).forEach(([building, tree]) => {
    if ("units" in tree) {
      Object.keys(tree.units).forEach((unit) => {
        const isMissing = checkIfMissing($, unit);
        if (isMissing) techTree[building].units[unit] = false;
      });
    }
    if ("techs" in tree) {
      Object.keys(tree.techs).forEach((tech) => {
        const isMissing = checkIfMissing($, tech);
        if (isMissing) techTree[building].techs[tech] = false;
      });
    }
  });
  return techTree;
}

// async function main() {
//   for (const civ of allCivs) {
//     console.log(`**** ${civ} ****`);
//     const pages = await getWikiPages(civ);
//     const characteristics = parseMainPage(pages.main);
//     const techTree = parseTechPage(pages.tech);
//     const civInfo: Civ = { characteristics, techTree };
//     // console.log(civInfo);
//   }
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .then(() => console.log("done"));
