import React from "react"

import styled from "styled-components"

import { useBreakpoint } from "gatsby-plugin-breakpoints"

import { breakpoints as bp, breakpoints } from "../styles/vars"

import PhoneAndKeyboardMobileImg from "../images/mobile/image-phone-and-keyboard.jpg"
import GlassAndKeyboardMobileImg from "../images/mobile/image-glass-and-keyboard.jpg"
import PhoneAndKeyboardTabletImg from "../images/tablet/image-phone-and-keyboard.jpg"
import GlassAndKeyboardTabletImg from "../images/tablet/image-glass-and-keyboard.jpg"
import PhoneAndKeyboardDesktopImg from "../images/desktop/image-phone-and-keyboard.jpg"
import GlassAndKeyboardDesktopImg from "../images/desktop/image-glass-and-keyboard.jpg"

import StyledContainer from "../styles/StyledContainer"
import StyledSquare from "../styles/StyledSquare"

const AboutContainer = styled(StyledContainer)`
  flex-direction: column;
  margin-bottom: 111px;
  overflow-y: hidden;

  @media (min-width: ${bp.desktop}) {
    flex-direction: row;
  }
`

const ImagesContainer = styled.div`
  display: flex;
  margin-bottom: 75px;

  @media (min-width: ${bp.tablet}) {
    /* justify-content: space-between; */
  }
`

const StyledImg = styled.img`
  border-radius: 20px;
  height: 193px;

  @media (min-width: ${bp.tablet}) {
    height: 320px;
  }

  @media (min-width: ${bp.desktop}) {
    height: 480px;
  }
`

const StyledPhoneAndKeyboardImg = styled(StyledImg)`
  /* width: 129px;
  position: relative;
  background: #f16718;

  @media (min-width: ${bp.tablet}) {
    right: 0;
    width: 214px;
    margin-right: 30px;
  }

  @media (min-width: ${bp.desktop}) {
    width: 255px;
  } */
`

const StyledPhoneAndKeyboardImgContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  width: 129px;
  position: relative;
  right: 44px;
  border-radius: 20px;
  background-color: #f16718;
  height: 193px;

  img {
    // The background-blend-mode and mix-blend-mode properties are important for the orange colored overlay.
    // This method is by far the cleanest way to implement the overlay.
    background-blend-mode: color;
    mix-blend-mode: multiply;
    height: 193px;
    border-radius: inherit;
    opacity: 0.75;
    width: inherit;
    height: inherit;
  }

  @media (min-width: ${bp.tablet}) {
    right: 0;
    width: 214px;
    margin-right: 30px;
    height: 320px;
  }

  @media (min-width: ${bp.desktop}) {
    width: 255px;
    height: 480px;
  }
`

const StyledGlassAndKeyboardMobile = styled(StyledImg)`
  width: 220px;
  position: relative;
  right: 24px;

  @media (min-width: ${bp.tablet}) {
    right: 0;
    width: auto;
  }

  @media (min-width: ${bp.desktop}) {
    height: 480px;
    width: 445px;
    margin-right: 125px;
  }
`

const StyledH2 = styled.h2`
  line-height: 36px;
  width: 255px;
  margin-bottom: 24px;

  @media (min-width: ${bp.tablet}) {
    margin-right: 62px;
    margin-bottom: 0;
  }

  @media (min-width: ${bp.desktop}) {
    margin: 0;
    margin-bottom: 27px;
  }
`

const StyledParagraph = styled.p`
  @media (min-width: ${bp.desktop}) {
    width: 260px;
  }
`

const DescriptionContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${bp.tablet}) {
    flex-direction: row;
    text-align: start;
  }

  @media (min-width: ${bp.desktop}) {
    flex-direction: column;
    padding-top: 142px;
  }
`

const About = () => {
  const breakpoints = useBreakpoint()

  const getPhoneAndKeyboardMobileImgSrc = () => {
    if (breakpoints.xs) return PhoneAndKeyboardMobileImg
    if (breakpoints.sm) return PhoneAndKeyboardTabletImg
    return PhoneAndKeyboardDesktopImg
  }

  const getGlassAndKeyboardMobileImg = () => {
    if (breakpoints.xs) return GlassAndKeyboardMobileImg
    if (breakpoints.sm) return GlassAndKeyboardTabletImg
    return GlassAndKeyboardDesktopImg
  }

  return (
    <AboutContainer>
      <ImagesContainer>
        <StyledPhoneAndKeyboardImgContainer>
          <StyledPhoneAndKeyboardImg
            src={getPhoneAndKeyboardMobileImgSrc()}
            alt=""
          />
        </StyledPhoneAndKeyboardImgContainer>
        <StyledGlassAndKeyboardMobile
          src={getGlassAndKeyboardMobileImg()}
          alt=""
        />
        {breakpoints.l && <StyledSquare top="960px" left="-120px" />}
      </ImagesContainer>
      <DescriptionContainer>
        <StyledH2>MECHANICAL WIRELESS KEYBOARD</StyledH2>
        <StyledParagraph>
          The Typemaster keyboard boasts top-notch build and practical design.
          It offers a wide variety of switches and keycaps, along with reliable
          wireless connectivity.
        </StyledParagraph>
      </DescriptionContainer>
    </AboutContainer>
  )
}

export default About
