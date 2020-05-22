import React from "react";
import styled from "styled-components";

import { Civ } from "../../sources/wiki/wiki";

import BuildingTechs from "./BuildingTechs";
import SuspenseImage from "./SuspenseImage";

interface CivOverviewProps {
  civ: Civ;
  images: Record<string, string>;
}

const CivOverview: React.FC<CivOverviewProps> = ({
  civ: {
    characteristics: { civBonuses, teamBonus, uniqueTechs, uniqueUnits },
    name,
    techTree,
  },
  images,
}) => {
  const path = `civIcons/${name}.png`;
  const logoSrc = images[path];
  return (
    <Container>
      <Column>
        <TitleRow>
          <Logo src={logoSrc} />
          <CivName>{name}</CivName>
        </TitleRow>
        <CivInfoSection>
          <Heading>Civ bonuses</Heading>
          <List>
            {civBonuses.map((bonus, i) => {
              return <ListItem key={i}>{bonus}</ListItem>;
            })}
          </List>
        </CivInfoSection>
        <CivInfoSection>
          <Heading>Team bonus</Heading>
          <List>
            <ListItem>{teamBonus}</ListItem>
          </List>
        </CivInfoSection>
        <CivInfoSection>
          <Heading>Unique units</Heading>
          <List>
            {uniqueUnits.map((unit, i) => {
              return (
                <ListItem key={i}>
                  <Bold>{unit.name}:</Bold> {unit.description}
                </ListItem>
              );
            })}
          </List>
        </CivInfoSection>
        <CivInfoSection>
          <Heading>Unique techs</Heading>
          <List>
            <ListItem>
              <Bold>{uniqueTechs.castleAge.name}:</Bold>{" "}
              {uniqueTechs.castleAge.description} (Castle Age)
            </ListItem>
            <ListItem>
              <Bold>{uniqueTechs.imperialAge.name}:</Bold>{" "}
              {uniqueTechs.imperialAge.description} (Imperial Age)
            </ListItem>
          </List>
        </CivInfoSection>
      </Column>
      <Column>
        <BuildingTechs
          building="archeryRange"
          images={images}
          tree={techTree}
        />
        <BuildingTechs building="barracks" images={images} tree={techTree} />
        <BuildingTechs building="stable" images={images} tree={techTree} />
      </Column>
      <Column>
        <BuildingTechs building="blacksmith" images={images} tree={techTree} />
        <BuildingTechs building="lumberCamp" images={images} tree={techTree} />
        <BuildingTechs building="mill" images={images} tree={techTree} />
        <BuildingTechs building="miningCamp" images={images} tree={techTree} />
        <BuildingTechs building="siegeWorkshop" images={images} tree={techTree} />
      </Column>
      <Column>
        <BuildingTechs building="dock" images={images} tree={techTree} />
        <BuildingTechs building="monastery" images={images} tree={techTree} />
        <BuildingTechs building="university" images={images} tree={techTree} />
        <BuildingTechs building="castle" images={images} tree={techTree} />
        <BuildingTechs building="market" images={images} tree={techTree} />
      </Column>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  margin-right: 8px;
`;

const TitleRow = styled.div`
  flex: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CivName = styled.h2`
  margin-left: 16px;
  font-size: 32px;
  font-weight: 700;
`;

const CivInfoSection = styled.div`
  flex: 0;
  margin-top: 16px;
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #000;
`;

const Logo = styled(SuspenseImage)`
  /* src is 104x104 */
  height: 104px;
  width: 104px;
`;

const List = styled.ul``;

const ListItem = styled.li`
  margin-top: 12px;
`;

const Bold = styled.span`
  font-weight: 700;
`;

export default CivOverview;
