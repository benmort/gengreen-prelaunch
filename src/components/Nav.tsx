import React from "react"
import LogoIcon from "../images/shared/logo.svg"
import styled from "styled-components"
import { weights, breakpoints } from "../styles/vars"
import StyledContainer from "../styles/StyledContainer"
import StyledButton from "../styles/StyledButton"

const { desktop } = breakpoints

const Navigation = styled.nav`
  margin-bottom: 64px;
  @media (min-width: ${desktop}) {
    margin-bottom: 83px;
  }
`

const SpaceBetweenContainer = styled(StyledContainer)`
  justify-content: space-between;
  align-items: center;
`
const Nav = () => {
  return (
    <Navigation>
      <SpaceBetweenContainer>
        <LogoIcon />
        <StyledButton>PRE-ORDER NOW</StyledButton>
      </SpaceBetweenContainer>
    </Navigation>
  )
}

export default Nav
