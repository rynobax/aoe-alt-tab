/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import styled from "styled-components";

import Header from "./Header";
import "./reset.css";

interface LayoutProps {
  civs: string[];
  selectedCiv: string;
  onCivChange: (civ: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, civs, selectedCiv, onCivChange }) => {
  return (
    <Container>
      <Header civs={civs} selectedCiv={selectedCiv} onCivChange={onCivChange} />
      <Main>{children}</Main>
      <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </Container>
  );
};

const Main = styled.main(
  (p) => `
  background: ${p.theme.tan};
  flex: 1;
  display: flex;
  padding: 8px;
`
);

const Container = styled.div(
  (p) => `
  background: ${p.theme.tan};
  height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
`
);

const Footer = styled.footer`
  margin: 0 auto;
`;

export default Layout;
