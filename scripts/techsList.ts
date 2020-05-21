// Used to help generate tech types
import * as got from "got";
import * as cheerio from "cheerio";
import * as _ from "lodash";

import { baseTechTree, nameForWiki } from "../sources/wiki/constants/techs";

interface Cost {
  food: number;
  wood: number;
  gold: number;
  stone: number;
}

interface RawTech {
  name: string;
  age: number;
  building: string;
  cost: Cost;
  effect: string;
}

function extractName(str: string) {
  const trimmed = str.trim();
  if (!trimmed.includes("<")) return trimmed;
  const res = /.*> (?<name>.*?)$/.exec(trimmed);
  if (!res)
    throw Error(`Could not extract name from ${JSON.stringify(trimmed)}`);
  return res[1];
}

function extractAge(str: string): number {
  switch (str.trim()) {
    case "I":
      return 1;
    case "II":
      return 2;
    case "III":
      return 3;
    case "IV":
      return 4;
    default:
      throw Error(`Unknown age ${str}`);
  }
}

function extractCost(str: string): Cost {
  const cost: Cost = {
    food: 0,
    gold: 0,
    stone: 0,
    wood: 0,
  };
  const trimmed = str.trim();

  const foodRes = /(\d*)F/.exec(trimmed);
  if (foodRes) cost.food = Number(foodRes[1]);

  const goldRes = /(\d*)G/.exec(trimmed);
  if (goldRes) cost.gold = Number(goldRes[1]);

  const stoneRes = /(\d*)S/.exec(trimmed);
  if (stoneRes) cost.stone = Number(stoneRes[1]);

  const woodRes = /(\d*)W/.exec(trimmed);
  if (woodRes) cost.wood = Number(woodRes[1]);

  return cost;
}

function rowToRawtech(row: CheerioElement): RawTech {
  const children = cheerio(row).children();
  const name = extractName(children.eq(0).text());
  const age = extractAge(children.eq(1).text());
  const building = children.eq(2).text().trim();
  const cost = extractCost(children.eq(3).text());
  const effect = children.eq(4).text().trim();
  return { name, age, building, cost, effect };
}

const parseTechs = ($: Cheerio) =>
  $.parent()
    .next()
    .find("tr")
    .toArray()
    .filter((_, i) => i !== 0)
    .map(rowToRawtech);

async function generateTechConstants() {
  const res = await got(
    "https://ageofempires.fandom.com/wiki/Technology_(Age_of_Empires_II)"
  );

  const techPage = res.body;

  const $ = cheerio.load(techPage);

  const techs: RawTech[] = [
    ...parseTechs($("#Building_technologies")),
    ...parseTechs($("#Economy_technologies")),
    ...parseTechs($("#Religious_technologies")),
    ...parseTechs($("#Infantry")),
    ...parseTechs($("#Missile_\\.2F_siege")),
    ...parseTechs($("#Cavalry")),
    ...parseTechs($("#Naval_technologies")),
    ...parseTechs($("#Miscellaneous_technologies")),
  ];

  const output: any = {};

  techs.forEach((tech) => {
    if (!output[_.camelCase(tech.building)])
      output[_.camelCase(tech.building)] = { techs: {} };
    output[_.camelCase(tech.building)].techs[_.camelCase(tech.name)] = true;
  });

  // Right now I manually update the techs with missing ones
  console.log(output);
}

async function main() {
  generateTechConstants();
}

main()
  .catch(console.error)
  .then(() => console.log("done"));
