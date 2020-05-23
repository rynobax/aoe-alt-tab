import React from "react";
import styled from "styled-components";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";

const GITHUB_URL = "https://github.com/rynobax/aoe-alt-tab";
const CONTACT_EMAIL = "hello@aoealttab.com";
const WIKI_URL =
  "https://ageofempires.fandom.com/wiki/Age_of_Empires_Series_Wiki";

interface HelpModalProps {
  isOpen: boolean;
  onDismiss: () => void;
}

const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onDismiss }) => {
  return (
    <CustomDialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <CustomDialogContent aria-label="About">
        <Section>
          Tip: You can press '/' to focus on the dropdown, and type to change it
        </Section>
        <VerticalPadding />
        <Section>
          Techs that all civs get and are not part of a chain of techs are
          hidden. Also, civ specific units (eagle, camels, steppe lancers) are
          hidden if the civ does not have access to them.
        </Section>
        <VerticalPadding />
        <Section>
          The info for this site comes from the{" "}
          <a href={WIKI_URL} target="_blank">
            Age of Empires Series Wiki
          </a>
          .
        </Section>
        <VerticalPadding />
        <Section>
          This site is a work in progress. If you have any feedback, feel free
          to contact <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          This project is open source, if you would like to contribute directly{" "}
          <a href={GITHUB_URL} target="_blank">
            check it out here.
          </a>
        </Section>
      </CustomDialogContent>
    </CustomDialogOverlay>
  );
};

const Section = styled.div``;

const VerticalPadding = styled.div`
  height: 32px;
`;

const CustomDialogContent = styled(DialogContent)(
  (p) => `
  background: ${p.theme.tan};
`
);

const CustomDialogOverlay = styled(DialogOverlay)(
  (p) => `
  background: hsla(0, 0%, 0%, 0.5);
`
);

export default HelpModal;
