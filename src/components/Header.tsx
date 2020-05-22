import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface HeaderProps {
  civs: string[];
  selectedCiv: string;
  onCivChange: (civ: string) => void;
}

const Header: React.FC<HeaderProps> = ({ civs, selectedCiv, onCivChange }) => {
  const [selectRef, setSelectRef] = useState<HTMLSelectElement | null>(null);
  useEffect(() => {
    if (!selectRef) return;
    const onPress = (ev: KeyboardEvent) => {
      if (ev.key === "/") {
        selectRef.focus();
      }
    };
    document.addEventListener("keypress", onPress);
    return () => document.removeEventListener("keypress", onPress);
  }, [selectRef]);
  return (
    <CustomHeader>
      <HeaderText>AoE Alt Tab</HeaderText>
      <ComboContainer>
        <ComboLabel>Select a Civ:</ComboLabel>
        <Combo>
          <ComboSelect
            value={selectedCiv}
            onChange={(e) => onCivChange(e.target.value)}
            ref={(ref) => setSelectRef(ref)}
            autoFocus
          >
            {civs.map((civ) => (
              <ComboOption key={civ} value={civ}>
                {civ}
              </ComboOption>
            ))}
          </ComboSelect>
        </Combo>
      </ComboContainer>
    </CustomHeader>
  );
};

const CustomHeader = styled.header(
  (p) => `
  background: ${p.theme.red};
  padding: 8px 24px;
  display: flex;
  flex-direction: row;
`
);

const ComboContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Combo = styled.div``;

const ComboLabel = styled.h2`
  color: white;
  font-size: 24px;
  margin-right: 12px;
`;

const ComboSelect = styled.select`
  width: 200px;
  padding: 8px;
  font-size: 16px;
  border-radius: 3px;
`;

const ComboOption = styled.option``;

const HeaderText = styled.h1`
  color: white;
  font-size: 32px;
  font-family: "Titillium Web";
  font-weight: 700;
`;

export default Header;
