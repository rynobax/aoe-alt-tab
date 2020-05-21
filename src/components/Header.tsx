import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

interface HeaderProps {
  civs: string[];
  onCivChange: (civ: string) => void;
}

const Header: React.FC<HeaderProps> = ({ civs, onCivChange }) => (
  <CustomHeader>
    <HeaderText>AoE Alt Tab</HeaderText>
    <select onChange={(e) => onCivChange(e.target.value)}>
      {civs.map((civ) => (
        <option value={civ} key={civ}>
          {civ}
        </option>
      ))}
    </select>
  </CustomHeader>
);

const CustomHeader = styled.header(
  (p) => `
  background: ${p.theme.red};
  margin-bottom: 24px;
  padding: 8px 24px;
  display: flex;
  flex-direction: row;
`
);

const HeaderText = styled.h1`
  color: white;
  font-size: 32px;
  font-family: "Titillium Web";
  font-weight: 700;
`;

export default Header;
