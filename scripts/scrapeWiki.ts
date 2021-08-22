import * as got from "got";
import * as cheerio from "cheerio";
import * as _ from "lodash";
import { allCivs } from "./static";
import { namesForWiki, nameForWikiNonAvailableStyle } from "./util";
import { TechTree, baseTechTree } from "../sources/wiki/data/techs";
import { Civ, Characteristics } from "../sources/wiki/wiki";

const MAX_TIME_TO_WAIT_FOR_PAGE = 15000;

interface ImageInfo {
  name: string;
  url: string;
}

interface WikiResult {
  civs: Civ[];
  civImages: ImageInfo[];
  techImages: ImageInfo[];
}

const wait = (ms: number) =>
  new Promise<void>((r) => setTimeout(() => r(), ms));

export async function scrapeWiki(): Promise<WikiResult> {
  let techImages: ImageInfo[] = [];
  const civImages: ImageInfo[] = [];
  let i = 0;
  const civs: Civ[] = [];
  for (const civ of allCivs) {
    console.log(`Fetching ${civ}`);
    const pages = await getWikiPages(civ);
    console.log(`done fetching ${civ} - ${++i} of ${allCivs.length}`);
    const characteristics = parseMainPage(pages.main, civ, civImages);
    const techTree = parseTechPage(pages.tech, techImages, civ);
    const civInfo: Civ = { name: civ, characteristics, techTree };
    civs.push(civInfo);
    console.log(`done with ${civ}`);
    await wait(60000);
  }

  techImages = _.uniqBy(techImages, (e) => e.name);

  return { civs, civImages, techImages };
}

async function getMainPage(civ: string) {
  for (let i = 0; i < 5; i++) {
    console.log(`Main page attempt ${i + 1}`);
    const res = await Promise.race<{ url: string; main: string } | null>([
      (async () => {
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
        return { url, main };
      })(),
      (async () => {
        await wait(MAX_TIME_TO_WAIT_FOR_PAGE);
        return null;
      })(),
    ]);
    if (res) return res;
  }
  throw Error("Gave up retrying");
}

async function getTechTreePage(url: string) {
  for (let i = 0; i < 5; i++) {
    console.log(`Tech tree attempt ${i + 1}`);
    const res = await Promise.race<string | null>([
      (async () => {
        const techRes = await got(`${url}/Tree`);
        return techRes.body;
      })(),
      (async () => {
        await wait(MAX_TIME_TO_WAIT_FOR_PAGE);
        return null;
      })(),
    ]);
    if (res) return res;
  }
  throw Error("Gave up retrying");
}

async function getWikiPages(
  civ: string
): Promise<{ main: string; tech: string }> {
  const { url, main } = await getMainPage(civ);
  const tech = await getTechTreePage(url);

  return { main, tech };
}

const extractNameAndDesc = (str: string) => {
  if (str.includes("Obuch"))
    return {
      name: "Obuch",
      description:
        "Infantry unit which can tear the armor from the enemy units",
    };

  if (str.includes("Hussite Wagon")) {
    return {
      name: "Hussite Wagon",
      description:
        "A gunpowder siege weapon unit which can protect units positioned behind them",
    };
  }

  const res1 = />?\s*(?<name>.+?): (?<desc>.+)/.exec(str);
  const res2 = />?\s*(?<name>.+?) \((?<desc>.+)\)/.exec(str);
  const res = res1 || res2;
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
  const cleaned = str
    .trim()
    .replace(/\[\d*\]/g, "")
    .replace(/( \(.*the Definitive Edition.*\))/g, "")
    .replace(/( \(.*not mentioned in the technology tree.*\))/g, "")
    .replace(/( \(.*only available after update.*\))/g, "")
    .replace(/\[.*note \d.*\]/g, "");
  if (cleaned.includes("in the HD")) return null;
  if (cleaned) return cleaned;
};

function findUniqueTech($: CheerioStatic, age: "imp" | "castle", civ: string) {
  if (civ === "Koreans") {
    return age === "castle"
      ? {
          name: "Eupseong",
          description: "Towers (except Bombard Towers) have +2 range.",
        }
      : {
          name: "Shinkichon",
          description: "Gives the Mangonel line +1 range.",
        };
  }

  if (civ === "Mayans") {
    return age === "castle"
      ? {
          name: "Hul'che Javelineers",
          description: "Skirmishers throw two projectiles.",
        }
      : {
          name: "El Dorado",
          description: "Gives Eagle Warriors +40 HP.",
        };
  }

  const alt1 =
    age === "castle" ? "CastleAgeUnique.png" : "Unique-tech-imperial.jpg";
  const alt2 =
    age === "castle" ? "UniqueTechCastle-DE.png" : "UniqueTechImperial-DE.png";

  const res1 = $("#Unique_technologies")
    .parent()
    .next()
    .find(`img[alt="${alt1}"]`);

  const res2 = $("#Unique_technologies")
    .parent()
    .next()
    .find(`img[alt="${alt2}"]`);

  let res: Cheerio;
  if (res1.length > 0) res = res1;
  else if (res2.length > 0) res = res2;
  else throw Error(`Could not find unique tech section for age ${age}`);

  let node = res.parent().parent();

  // Persians have an old tech listed
  let filteredNode = node;
  if (node.length > 1)
    filteredNode = filteredNode.filter(
      (_, e) =>
        $(e).text().includes("only in the") ||
        $(e).text().includes("only available after")
    );
  if (filteredNode.length === 0) filteredNode = node.parent();
  if (node.length > 1)
    filteredNode = filteredNode.filter(
      (_, e) =>
        $(e).text().includes("only in the") ||
        $(e).text().includes("only available after")
    );
  if (filteredNode.length > 1) throw Error(`Civ has multiple ${age} techs`);
  if (filteredNode.length === 0) throw Error(`Civ has no ${age} techs`);

  try {
    const tech = extractNameAndDesc(filteredNode.text());
    return tech;
  } catch (err) {
    filteredNode = filteredNode.parent();
    const tech = extractNameAndDesc(filteredNode.text());
    return tech;
  }
}

const getIcon = ($: CheerioStatic, civName: string) => {
  const icon1 = $(`img[data-image-key="CivIcon-${civName}.png"]`);
  const icon2 = $(
    `img[data-image-key="Menu_techtree_${civName.toLocaleLowerCase()}.png"]`
  );
  const icon3 = $(`img[data-image-key="${civName}_Icon.png"]`);
  if (icon1.length) return icon1;
  if (icon2.length) return icon2;
  if (icon3.length) return icon3;
  throw Error(`Could not find icon for ${civName}`);
};

function parseMainPage(
  page: string,
  civName: string,
  civImages: ImageInfo[]
): Characteristics {
  console.log(`starting ${civName}`);
  const $ = cheerio.load(page);

  const icon = getIcon($, civName);
  civImages.push({ name: civName, url: icon.attr("src") });

  const uniqueUnits = getUniqueUnitsSection($)
    .parent()
    .next()
    .children()
    .toArray()
    .map((c) => $(c).text())
    .map(extractNameAndDesc);

  const { name: castleName, description: castleDesc } = findUniqueTech(
    $,
    "castle",
    civName
  );
  const { name: impName, description: impDesc } = findUniqueTech(
    $,
    "imp",
    civName
  );

  const civBonuses = $("#Civilization_bonuses")
    .parent()
    .next()
    .children()
    .toArray()
    .map((c) => $(c).text())
    .map(cleanWikiText)
    .filter(Boolean);

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
): { success: boolean; missing: boolean } {
  const prefixes = namesForWiki(thing);

  let success = false;
  let missing: boolean;
  for (const prefix of prefixes) {
    if (success) continue;

    // weird prefix stuff is for lithuanians
    const availableName = prefix.includes(".png")
      ? prefix
      : `${prefix}available.png`;
    const unavailableName = prefix.includes(".png")
      ? prefix
      : `${prefix}unavailable.png`;
    const hasThing = $(`img[data-image-key="${availableName}"]`);
    const missingThing = $(`img[data-image-key="${unavailableName}"]`);

    if (hasThing.length + missingThing.length === 0) {
      continue;
    }

    success = true;
    if (hasThing.length > 0) {
      missing = false;
      techImages.push({ name: availableName, url: hasThing.attr("data-src") });
    } else {
      missing = true;
      techImages.push({
        name: unavailableName,
        url: missingThing.attr("data-src"),
      });
    }
  }

  if (success) return { success: true, missing };
  else return { success: false, missing: false };
}

function parseTechPage(
  page: string,
  techImages: ImageInfo[],
  civ: string
): TechTree {
  const $ = cheerio.load(page);
  const techTree = baseTechTree();

  let hussarFailed = false;

  Object.entries(techTree).forEach(([building, tree]) => {
    Object.keys(tree).forEach((tech) => {
      const { missing, success } = checkIfMissing($, tech, techImages);
      if (!success) {
        if (tech.toLocaleLowerCase().includes("hussar")) {
          if (hussarFailed) {
            throw Error(`Could not find whether they have either hussar`);
          }
          hussarFailed = true;
        } else {
          throw Error(`Could not find whether they have ${tech}`);
        }
      }
      techTree[building][tech] = !missing;
    });
  });
  return techTree;
}
