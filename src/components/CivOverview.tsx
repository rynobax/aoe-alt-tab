import React from "react";
import styled from "styled-components";

import { Civ } from "../../sources/wiki/wiki";

import BuildingTechs from "./BuildingTechs";
import { TechImage } from "../pages";

interface CivOverviewProps {
  civ: Civ;
  techImages: TechImage[];
}

const CivOverview: React.FC<CivOverviewProps> = ({
  civ: {
    characteristics: { civBonuses, teamBonus, uniqueTechs, uniqueUnits },
    name,
    techTree,
  },
  techImages,
}) => {
  return (
    <Container>
      <Column>
        <Logo />
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
                  {unit.name}: {unit.description}
                </ListItem>
              );
            })}
          </List>
        </CivInfoSection>
        <CivInfoSection>
          <Heading>Unique techs</Heading>
          <List>
            <ListItem>
              Castle Age | {uniqueTechs.castleAge.name}:{" "}
              {uniqueTechs.castleAge.description}
            </ListItem>
            <ListItem>
              Imperial Age | {uniqueTechs.imperialAge.name}:{" "}
              {uniqueTechs.imperialAge.description}
            </ListItem>
          </List>
        </CivInfoSection>
      </Column>
      <Column>
        <BuildingTechs
          building="archeryRange"
          techImages={techImages}
          tree={techTree}
        />
        <BuildingTechs
          building="barracks"
          techImages={techImages}
          tree={techTree}
        />
        <BuildingTechs
          building="stable"
          techImages={techImages}
          tree={techTree}
        />
      </Column>
      <Column>
        <BuildingTechs
          building="blacksmith"
          techImages={techImages}
          tree={techTree}
        />
        <BuildingTechs
          building="lumberCamp"
          techImages={techImages}
          tree={techTree}
        />
        <BuildingTechs
          building="mill"
          techImages={techImages}
          tree={techTree}
        />
        <BuildingTechs
          building="miningCamp"
          techImages={techImages}
          tree={techTree}
        />
        <BuildingTechs
          building="market"
          techImages={techImages}
          tree={techTree}
        />
      </Column>
      <Column>
        <BuildingTechs
          building="dock"
          techImages={techImages}
          tree={techTree}
        />
        <BuildingTechs
          building="monastery"
          techImages={techImages}
          tree={techTree}
        />
        <BuildingTechs
          building="university"
          techImages={techImages}
          tree={techTree}
        />
        <BuildingTechs
          building="castle"
          techImages={techImages}
          tree={techTree}
        />
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
`;

const Todo = styled.div`
  flex: 1;
`;

const CivInfoSection = styled.div`
  flex: 1;
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #000;
`;

const Logo = styled.div`
  background: grey;
  height: 64px;
  width: 64px;
`;

const List = styled.ul``;

const ListItem = styled.li`
  margin-top: 8px;
`;

export default CivOverview;
