import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HelpModal from "./HelpModal";

interface HeaderProps {
  civs: string[];
  selectedCiv: string;
  onCivChange: (civ: string) => void;
}

const Header: React.FC<HeaderProps> = ({ civs, selectedCiv, onCivChange }) => {
  const [showDialog, setShowDialog] = React.useState(false);
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

  function onHelpPress() {
    setShowDialog(true);
  }

  function onHelpClose() {
    setShowDialog(false);
  }

  const sortedCivs = civs.sort((a, b) => a.localeCompare(b));

  return (
    <CustomHeader>
      <TitleSection>
        <HeaderText>AoE Alt Tab</HeaderText>
      </TitleSection>
      <SelectSection>
        <ComboContainer>
          <ComboLabel>Select a Civ:</ComboLabel>
          <Combo>
            <ComboSelect
              value={selectedCiv}
              onChange={(e) => onCivChange(e.target.value)}
              ref={(ref) => setSelectRef(ref)}
              autoFocus
            >
              {sortedCivs.map((civ) => (
                <ComboOption key={civ} value={civ}>
                  {civ}
                </ComboOption>
              ))}
            </ComboSelect>
          </Combo>
        </ComboContainer>
      </SelectSection>
      <InfoSection>
        <InfoButton onClick={onHelpPress}>?</InfoButton>
        <HelpModal isOpen={showDialog} onDismiss={onHelpClose} />
      </InfoSection>
    </CustomHeader>
  );
};

const CustomHeader = styled.header(
  (p) => `
  background: ${p.theme.red};
  padding: 8px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  font-size: 20px;
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

const InfoButton = styled.button`
  color: white;
  font-size: 24px;
  font-family: "Titillium Web";
  font-weight: 700;
  background: none;
  border: 2px solid white;
  border-radius: 4444px;
  padding: 4px;
  width: 40px;
  height: 40px;

  :hover {
    background: hsla(0, 100%, 100%, 0.15);
    cursor: pointer;
  }
`;

const TitleSection = styled.div`
  flex: 1;
`;

const SelectSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const InfoSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export default Header;
