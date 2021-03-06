import * as _ from "lodash";

import { TechTree } from "./data/techs";

export interface Characteristics {
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
  teamBonus: string;
}

export interface Civ {
  name: string;
  characteristics: Characteristics;
  techTree: TechTree;
}

export const createWiki = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const civs: Civ[] = require("./data/civs.json");
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
