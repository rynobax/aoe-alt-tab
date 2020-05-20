import { allCivs } from "./civs";
import * as got from "got";
import * as cheerio from "cheerio";
import * as t from "io-ts";

// const Civ = t.type({
//   uniqueUnit: t.type({
//     name: t.string,
//     description: t.string,
//   }),
//   name: t.string
// })

interface Civ {
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

export const createWiki = ({ actions, createNodeId, createContentDigest }) => {
  const pokemons = [
    { name: "Pikachu", type: "electric" },
    { name: "Squirtle", type: "water" },
  ];
  pokemons.forEach((pokemon) => {
    const node = {
      name: pokemon.name,
      type: pokemon.type,
      id: createNodeId(`Pokemon-${pokemon.name}`),
      internal: {
        type: "Pokemon",
        contentDigest: createContentDigest(pokemon),
      },
    };
    actions.createNode(node);
  });
};

async function getWikiPage(civ: string) {
  const url = `https://ageofempires.fandom.com/wiki/${civ}`;
  const res = await got(url);
  if (res.body.includes('id="disambigbox"')) {
    const aoe2Url = url + "_(Age_of_Empires_II)";
    const newRes = await got(aoe2Url);
    return newRes.body;
  } else {
    return res.body;
  }
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

function parseWikiPage(page: string): Civ {
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

async function main() {
  // for (const civ of allCivs) {
  //   console.log(`**** ${civ} ****`);
  //   const text = await getWikiPage(civ);
  //   const res = parseWikiPage(text);
  //   console.log(res);
  // }
  const text = await getWikiPage("Vikings");
  const res = parseWikiPage(text);
  console.log(res);
}

main()
  .then(console.log)
  .catch(console.error)
  .then(() => console.log("done"));
