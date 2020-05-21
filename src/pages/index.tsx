import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import random from "lodash/random";

import Layout from "../components/Layout";
import Image from "../components/Image";
import SEO from "../components/SEO";

import theme from "../theme";

import { Civ } from "../../sources/wiki/wiki";

export const query = graphql`
  query Civs {
    allCiv {
      nodes {
        name
        characteristics {
          civBonuses
          teamBonuses
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
            units {
              archer
              crossbowman
              arbalester
              skirmisher
              eliteSkirmisher
              cavalryArcher
              heavyCavalryArcher
              handCannoneer
            }
            techs {
              thumbRing
              parthianTactics
            }
          }
          barracks {
            units {
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
            }
            techs {
              supplies
              squires
              arson
            }
          }
          blacksmith {
            techs {
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
          }
          castle {
            techs {
              hoardings
              conscription
              sappers
            }
          }
          dock {
            units {
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
            }
            techs {
              gillnets
              careening
              dryDock
              shipwright
            }
          }
          lumberCamp {
            techs {
              doubleBitAxe
              bowSaw
              twoManSaw
            }
          }
          market {
            techs {
              caravan
              coinage
              banking
              guilds
            }
          }
          mill {
            techs {
              horseCollar
              heavyPlow
              cropRotation
            }
          }
          miningCamp {
            techs {
              goldMining
              goldShaftMining
              stoneMining
              stoneShaftMining
            }
          }
          monastery {
            techs {
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
          }
          stable {
            units {
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
            }
            techs {
              bloodlines
              husbandry
            }
          }
          siegeWorkshop {
            units {
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
          }
          townCenter {
            techs {
              townWatch
              townPatrol
              wheelbarrow
              handCart
              loom
              feudalAge
              castleAge
              imperialAge
            }
          }
          university {
            techs {
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
  }
`;

interface IndexPageProps {
  data: { allCiv: { nodes: Civ[] } };
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const allCivs = data.allCiv.nodes;
  const [civName, setCivName] = useState(
    allCivs[random(0, allCivs.length - 1)].name
  );

  const civ = allCivs.find((e) => e.name === civName);
  if (!civ) throw Error(`Can't find civ ${civName}`);

  return (
    <ThemeProvider theme={theme}>
      <Layout
        civs={allCivs.map((c) => c.name)}
        onCivChange={(e) => setCivName(e)}
      >
        <SEO title="Home" />
        {JSON.stringify(civ)}
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
