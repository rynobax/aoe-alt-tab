import React from "react";
import styled from "styled-components";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";

const GITHUB_URL = "https://github.com/rynobax/aoe-alt-tab";
const CONTACT_EMAIL = "CONTACT_EMAIL";

interface HelpModalProps {
  isOpen: boolean;
  onDismiss: () => void;
}

const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onDismiss }) => {
  return (
    <CustomDialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <CustomDialogContent>
        <Section>
          Tip: You can press '/' to focus on the dropdown, and type to change it
        </Section>
        <VerticalPadding />
        <Section>
          This site is a work in progress. If you have any feedback, feel free
          to contact {CONTACT_EMAIL}. This project is open source, if you would
          like to contribute directly{" "}
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
