import * as React from "react";
import { graphql } from "gatsby";
import styled, { ThemeProvider } from "styled-components";
import random from "lodash/random";
import "./reset.css";

const { useState, useMemo, useEffect, useLayoutEffect } = React;
// Using experimental build :)
const useTransition = (React as any).unstable_useTransition;

import SEO from "../components/SEO";

import theme from "../theme";

import { Civ } from "../../sources/wiki/wiki";
import CivOverview from "../components/CivOverview";
import Header from "../components/Header";

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

interface IndexPageProps {
  data: {
    allCiv: { nodes: Civ[] };
    allFile: {
      nodes: Array<{
        relativePath: string;
        publicURL: string;
      }>;
    };
  };
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const allCivs = data.allCiv.nodes;
  const images = data.allFile.nodes;

  const [startTransition] = useTransition({ timeoutMs: 750 });
  const [civName, setCivName] = useState("Aztecs");

  const imageMap = useMemo<Record<string, string>>(() => {
    return images.reduce(
      (p, c) => ({ ...p, [c.relativePath]: c.publicURL }),
      {}
    );
  }, [images.length]);

  const civ = allCivs.find((e) => e.name === civName);
  if (!civ) throw Error(`Unknown civ ${civName}`);

  return (
    <ThemeProvider theme={theme}>
      <SEO title="Home" />
      <Container>
        <Header
          civs={allCivs.map((c) => c.name)}
          selectedCiv={civName}
          onCivChange={(e) => startTransition(() => setCivName(e))}
        />
        <Main>
          <CivOverview civ={civ} images={imageMap} />
        </Main>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div(
  (p) => `
  background: ${p.theme.tan};
  height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${p.theme.tan};
`
);

const Main = styled.main(
  (p) => `
  flex: 1;
  display: flex;
  padding: 8px;
  overflow: auto;
`
);

const StrictIndexPage: React.FC<IndexPageProps> = (props) => {
  return (
    <React.StrictMode>
      <IndexPage {...props} />
    </React.StrictMode>
  );
};

export default StrictIndexPage;
