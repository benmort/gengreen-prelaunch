import React from "react"

import HeadingMobileImg from "../images/mobile/image-keyboard.jpg"
import HeadingTabletImg from "../images/tablet/image-keyboard.jpg"
import HeadingDesktopImg from "../images/desktop/image-keyboard.jpg"

import styled from "styled-components"

import { weights, breakpoints as bp } from "../styles/vars"

import { useBreakpoint } from "gatsby-plugin-breakpoints"

import StyledContainer from "../styles/StyledContainer"
import StyledButton from "../styles/StyledButton"
import StyledSquare from "../styles/StyledSquare"

const { tablet, desktop } = bp

const StyledH1 = styled.h1`
  line-height: 48px;
  margin-bottom: 32px;
  font-size: 3rem;

  @media (min-width: ${desktop}) {
    font-size: 3.5rem;
  }
`

const HeadingContainer = styled(StyledContainer)`
  padding-top: 0;
  flex-direction: column;

  @media (min-width: ${tablet}) {
    flex-direction: row;
    align-items: center;
  }
`

const MainContainer = styled.div`
  @media (min-width: ${desktop}) {
    width: 445px;
  }
`

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 64px;

  @media (min-width: ${tablet}) {
    width: 339px;
    justify-content: start;
  }

  button {
    margin-right: 32px;
    @media (min-width: ${tablet}) {
      margin-right: 37px;
    }
    @media (min-width: ${desktop}) {
      margin-right: 40px;
    }
  }
`

const StyledSpan = styled.span`
  text-transform: capitalize;
  color: #7b8bad;
  font-weight: ${weights.bold};
`

const StyledParagraph = styled.p`
  margin-bottom: 32px;
  @media (min-width: ${desktop}) {
    font-size: 1.125rem;
  }
`

const StyledImg = styled.img`
  border-radius: 20px;
  position: relative;
  width: 372px;

  @media (min-width: ${tablet}) {
    left: 69px;
    width: 478px;
  }

  @media (min-width: ${desktop}) {
    width: 540px;
    height: 480px;
    left: 125px;
  }
`

const Heading = () => {
  const breakpoints = useBreakpoint()

  const getHeadingImgSrc = () => {
    if (breakpoints.xs) return HeadingMobileImg
    if (breakpoints.sm) return HeadingTabletImg
    return HeadingDesktopImg
  }

  return (
    <HeadingContainer>
      <MainContainer>
        <StyledH1>TYPEMASTER KEYBOARD</StyledH1>
        <StyledParagraph>
          Improve your productivity and gaming without breaking the bank.
          Upgrade to a high quality mechanical typing experience.
        </StyledParagraph>
        <InnerContainer>
          <StyledButton
            backgroundColor="#F16718"
            textColor="white"
            backgroundHoverColor="#FF9B62"
          >
            PRE-ORDER NOW
          </StyledButton>
          <StyledSpan>RELEASE ON 5/27</StyledSpan>
        </InnerContainer>
      </MainContainer>

      {/* TODO: The network tab in the dev tools is showing two images are being fetched. Find a way to fetch the one appropriate image. */}
      <StyledImg src={getHeadingImgSrc()} alt="" />
      {breakpoints.l && <StyledSquare top="185.5px" left="1305px" />}
    </HeadingContainer>
  )
}

export default Heading
