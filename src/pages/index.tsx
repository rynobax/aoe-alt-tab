import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import random from "lodash/random";

import Layout from "../components/Layout";
import Image from "../components/Image";
import SEO from "../components/SEO";

import theme from "../theme";

import { Civ } from "../../sources/wiki/wiki";
import CivOverview from "../components/CivOverview";

export const query = graphql`
  query {
    allFile {
      nodes {
        relativePath
        publicURL
      }
    }
    allCiv {
      nodes {
        name
        characteristics {
          civBonuses
          teamBonus
          uniqueUnits {
            name
            description
          }
          uniqueTechs {
            castleAge {
              name
              description
            }
            imperialAge {
              name
              description
            }
          }
        }
        techTree {
          archeryRange {
            archer
            crossbowman
            arbalester
            skirmisher
            eliteSkirmisher
            cavalryArcher
            heavyCavalryArcher
            handCannoneer
            thumbRing
            parthianTactics
          }
          barracks {
            militia
            manAtArms
            longSwordsman
            twoHandedSwordsman
            champion
            spearman
            pikeman
            halberdier
            eagleScout
            eagleWarrior
            eliteEagleWarrior
            supplies
            squires
            arson
          }
          blacksmith {
            forging
            ironCasting
            blastFurnace
            scaleMailArmor
            chainMailArmor
            plateMailArmor
            fletching
            bodkinArrow
            bracer
            paddedArcherArmor
            leatherArcherArmor
            ringArcherArmor
            scaleBardingArmor
            chainBardingArmor
            plateBardingArmor
          }
          castle {
            hoardings
            conscription
            sappers
          }
          dock {
            fishingShip
            transportShip
            tradeCog
            galley
            warGalley
            galleon
            fireGalley
            fireShip
            fastFireShip
            demolitionRaft
            demolitionShip
            heavyDemolitionShip
            cannonGalleon
            eliteCannonGalleon
            gillnets
            careening
            dryDock
            shipwright
          }
          lumberCamp {
            doubleBitAxe
            bowSaw
            twoManSaw
          }
          market {
            caravan
            coinage
            banking
            guilds
          }
          mill {
            horseCollar
            heavyPlow
            cropRotation
          }
          miningCamp {
            goldMining
            goldShaftMining
            stoneMining
            stoneShaftMining
          }
          monastery {
            redemption
            atonement
            herbalMedicine
            heresy
            sanctity
            fervor
            faith
            illumination
            blockPrinting
            theocracy
          }
          stable {
            scoutCavalry
            lightCavalry
            hussar
            knight
            cavalier
            paladin
            camelRider
            heavyCamelRider
            battleElephant
            eliteBattleElephant
            steppeLancer
            eliteSteppeLancer
            bloodlines
            husbandry
          }
          siegeWorkshop {
            batteringRam
            cappedRam
            siegeRam
            mangonel
            onager
            siegeOnager
            scorpion
            heavyScorpion
            bombardCannon
            siegeTower
          }
          townCenter {
            townWatch
            townPatrol
            wheelbarrow
            handCart
            loom
            feudalAge
            castleAge
            imperialAge
          }
          university {
            treadmillCrane
            masonry
            architecture
            ballistics
            heatedShot
            murderHoles
            arrowslits
            chemistry
            siegeEngineers
          }
        }
      }
    }
  }
`;

export interface TechImage {
  relativePath: string;
  publicURL: string;
}

interface IndexPageProps {
  data: {
    allCiv: { nodes: Civ[] };
    allFile: { nodes: TechImage[] };
  };
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const allCivs = data.allCiv.nodes;
  const techImages = data.allFile.nodes;

  const [civName, setCivName] = useState(
    allCivs[random(0, allCivs.length - 1)].name
  );

  const civ = allCivs.find((e) => e.name === civName);
  if (!civ) throw Error(`Can't find civ ${civName}`);

  return (
    <ThemeProvider theme={theme}>
      <Layout
        civs={allCivs.map((c) => c.name)}
        selectedCiv={civName}
        onCivChange={(e) => setCivName(e)}
      >
        <SEO title="Home" />
        <CivOverview civ={civ} techImages={techImages} />
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
