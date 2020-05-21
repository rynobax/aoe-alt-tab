import React, { useState } from "react";
import styled from "styled-components";
import { useCombobox } from "downshift";

interface HeaderProps {
  civs: string[];
  selectedCiv: string;
  onCivChange: (civ: string) => void;
}

const Header: React.FC<HeaderProps> = ({ civs, selectedCiv, onCivChange }) => {
  const [items, setItems] = useState(civs);

  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items,
    selectedItem: selectedCiv,
    onSelectedItemChange: (e) => e.selectedItem && onCivChange(e.selectedItem),
    onInputValueChange: ({ inputValue }) => {
      setItems(
        civs.filter((item) =>
          item.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      );
    },
  });

  return (
    <CustomHeader>
      <HeaderText>AoE Alt Tab</HeaderText>
      <ComboContainer>
        <ComboLabel {...getLabelProps()}>Select a Civ:</ComboLabel>
        <Combo {...getComboboxProps()}>
          <ComboInput {...getInputProps()} />
          <ComboMenu {...getMenuProps()}>
            {isOpen &&
              items.map((item, index) => (
                <ComboMenuItem
                  style={
                    highlightedIndex === index
                      ? { backgroundColor: "#bde4ff" }
                      : {}
                  }
                  key={`${item}${index}`}
                  {...getItemProps({ item, index })}
                >
                  {item}
                </ComboMenuItem>
              ))}
          </ComboMenu>
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

const ComboInput = styled.input`
  width: 200px;
  padding: 8px;
  font-size: 16px;
`;

const ComboMenu = styled.ul`
  width: 212px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  margin: 0px;
  border-top: 0px;
  background: white;
  padding-left: 8px;
`;

const ComboMenuItem = styled.li`
  width: 100%;
  padding-top: 3px;
  padding-bottom: 3px;
`;

const HeaderText = styled.h1`
  color: white;
  font-size: 32px;
  font-family: "Titillium Web";
  font-weight: 700;
`;

export default Header;
