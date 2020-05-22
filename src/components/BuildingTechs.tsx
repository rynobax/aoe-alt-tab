import React from "react";
import styled from "styled-components";
import capitalize from "lodash/capitalize";
import kebabCase from "lodash/kebabCase";

import { TechTree } from "../../sources/wiki/data/techs";
import { nameForWiki } from "../../scripts/util";
import SuspenseImage from "./SuspenseImage";

type Building = keyof TechTree;
type TechKeys<B extends Building> = keyof TechTree[B];

const archeryRange: TechKeys<"archeryRange">[][] = [
  ["archer", "crossbowman", "arbalester"],
  ["skirmisher", "eliteSkirmisher", "handCannoneer"],
  ["cavalryArcher", "heavyCavalryArcher"],
  ["thumbRing", "parthianTactics"],
];

const barracks: TechKeys<"barracks">[][] = [
  ["militia", "manAtArms", "longSwordsman", "twoHandedSwordsman", "champion"],
  ["spearman", "pikeman", "halberdier"],
  ["eagleScout", "eagleWarrior", "eliteEagleWarrior"],
  ["supplies", "squires", "arson"],
];

const blacksmith: TechKeys<"blacksmith">[][] = [
  ["paddedArcherArmor", "leatherArcherArmor", "ringArcherArmor"],
  ["fletching", "bodkinArrow", "bracer"],
  ["forging", "ironCasting", "blastFurnace"],
  ["scaleBardingArmor", "chainBardingArmor", "plateBardingArmor"],
  ["scaleMailArmor", "chainMailArmor", "plateMailArmor"],
];

const dock: TechKeys<"dock">[][] = [
  ["fireGalley", "fireShip", "fastFireShip"],
  ["galley", "warGalley", "galleon"],
  ["demolitionRaft", "demolitionShip", "heavyDemolitionShip"],
  ["careening", "dryDock", "shipwright"],
];

const castle: TechKeys<"castle">[][] = [
  ["conscription", "hoardings", "sappers"],
];

const lumberCamp: TechKeys<"lumberCamp">[][] = [
  ["doubleBitAxe", "bowSaw", "twoManSaw"],
];

const market: TechKeys<"market">[][] = [
  ["caravan", "coinage", "banking", "guilds"],
];

const mill: TechKeys<"mill">[][] = [
  ["horseCollar", "heavyPlow", "cropRotation"],
];

const miningCamp: TechKeys<"miningCamp">[][] = [
  ["goldMining", "goldShaftMining", "stoneMining", "stoneShaftMining"],
  [],
];

const monastery: TechKeys<"monastery">[][] = [
  ["redemption", "atonement", "herbalMedicine"],
  ["heresy", "sanctity", "fervor"],
  ["faith", "illumination", "blockPrinting", "theocracy"],
];

const siegeWorkshop: TechKeys<"siegeWorkshop">[][] = [
  ["batteringRam", "cappedRam", "siegeRam"],
  ["mangonel", "onager", "siegeOnager"],
  ["scorpion", "heavyScorpion"],
  ["bombardCannon"],
];

const stable: TechKeys<"stable">[][] = [
  ["scoutCavalry", "lightCavalry", "hussar"],
  ["knight", "cavalier", "paladin"],
  [
    "camelRider",
    "heavyCamelRider",
    "battleElephant",
    "eliteBattleElephant",
    "steppeLancer",
    "eliteSteppeLancer",
  ],
  ["bloodlines", "husbandry"],
];

const university: TechKeys<"university">[][] = [
  ["fortifiedWallResearch", "chemistry", "siegeEngineers", "treadmillCrane"],
  ["masonry", "architecture", "heatedShot", "arrowslits"],
  ["guardTowerResearch", "keepResearch", "bombardTowerResearch"],
];

function getBuildingGrid(building: Building): string[][] {
  switch (building) {
    case "archeryRange":
      return archeryRange;
    case "barracks":
      return barracks;
    case "blacksmith":
      return blacksmith;
    case "castle":
      return castle;
    case "dock":
      return dock;
    case "lumberCamp":
      return lumberCamp;
    case "market":
      return market;
    case "mill":
      return mill;
    case "miningCamp":
      return miningCamp;
    case "monastery":
      return monastery;
    case "siegeWorkshop":
      return siegeWorkshop;
    case "stable":
      return stable;
    case "university":
      return university;
  }
}

const alwaysShow = [
  "thumbRing",
  "supplies",
  "redemption",
  "heresy",
  "faith",
  "bombardCannon",
  "bloodlines",
  "fireGalley",
  "guardTowerResearch",
];

function filterSpecificCavs(tree: TechTree, cavs: TechKeys<"stable">[]) {
  const stable = tree["stable"];
  const hasCamels = !!stable["camelRider"];
  const hasElephantos = !!stable["battleElephant"];
  const hasSteppeLancer = !!stable["steppeLancer"];

  const ret: TechKeys<"stable">[] = [];
  if (hasCamels) {
    ret.push("camelRider");
    ret.push("heavyCamelRider");
  }
  if (hasElephantos) {
    ret.push("battleElephant");
    ret.push("eliteBattleElephant");
  }
  if (hasSteppeLancer) {
    ret.push("steppeLancer");
    ret.push("eliteSteppeLancer");
  }
  return ret;
}

interface BuildingTechsProps {
  building: Building;
  tree: TechTree;
  images: Record<string, string>;
}

const BuildingTechs: React.FC<BuildingTechsProps> = ({
  building,
  tree,
  images,
}) => {
  const grid = getBuildingGrid(building);

  // If it's a meso stable, just return null
  if (grid.every((row) => row.every((k) => !tree[building][k]))) return null;

  const sectionName = kebabCase(building).split("-").map(capitalize).join(" ");

  return (
    <>
      <Header>{sectionName}</Header>
      {grid.map((row) => {
        if (
          // If this civ doesn't get any of the line,
          row.every((k) => !tree[building][k]) &&
          // and it's not a tech row we always show
          row.every((k) => !alwaysShow.includes(k))
          // don't show it
        )
          return null;

        let filteredRow = row;
        if (row[0] === "camelRider")
          filteredRow = filterSpecificCavs(tree, row as any);
        return (
          <Row key={filteredRow.join("-")}>
            {filteredRow.map((k) => {
              const haveIt = tree[building][k];
              const imageName = `${nameForWiki(k)}${
                haveIt ? "available" : "unavailable"
              }.png`;
              const path = `techs/${imageName}`;
              const src = images[path];
              return <Image key={k} src={src} />;
            })}
          </Row>
        );
      })}
    </>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;

const Image = styled(SuspenseImage)`
  /* Original image is 80x84 */
  width: 60px;

  margin-right: 16px;
`;

const Header = styled.div`
  font-size: 16px;
  /* font-weight: 700; */
  color: #333;
`;

export default BuildingTechs;
