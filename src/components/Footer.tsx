import React from "react"
import styled from "styled-components"
import { weights } from "../styles/vars"

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
`

const StyledSpan = styled.span`
  font-weight: ${weights.bold};
`

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        <span style={{ fontWeight: 700 }}>
          genGreen 2022{" "}
          <span style={{ marginLeft: 3, marginRight: 3 }}>|</span>
        </span>{" "}
        All Rights Reserved
      </p>
    </StyledFooter>
  )
}

export default Footer
