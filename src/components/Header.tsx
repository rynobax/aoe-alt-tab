import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <CustomHeader>
    <Something>
      <CustomH1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </CustomH1>
    </Something>
  </CustomHeader>
)

const CustomHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 24px;
`

const Something = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 24px 16px;
`

const CustomH1 = styled.h1`
  margin: 0;
`

export default Header
