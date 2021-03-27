import React from "react"

import styled from "styled-components"

import BatteryIcon from "../images/shared/icon-battery.svg"
import BluetoothIcon from "../images/shared/icon-bluetooth.svg"
import CompatibleIcon from "../images/shared/icon-compatible.svg"
import LightIcon from "../images/shared/icon-light.svg"

import { breakpoints } from "../styles/vars"

const FeaturesContainer = styled.div`
  display: grid;
  gap: 64px;
  grid-auto-flow: row;
  padding: 0 24px;
  margin-bottom: 96px;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    padding: 0 98px 0 39px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto;
    padding: 0 165px;
    gap: 30px;
  }
`
const IconContainer = styled.div`
  background: #f16718;
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 48px;
`

const Feature = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${breakpoints.tablet}) {
    text-align: start;
    align-items: flex-start;
  }
`

const FeatureBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledH3 = styled.h3`
  margin-bottom: 24px;
  padding: 0 75px;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 0;
    padding-right: 103px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 0;
    padding-right: 60px;
  }
`

const StyledParagraph = styled.p`
  @media (min-width: ${breakpoints.tablet}) {
  }
`

const Features = () => {
  const featuresArr = [
    {
      icon: <CompatibleIcon />,
      title: `HIGHLY COMPATIBLE`,
      description: `Easy to use and works well with all major computer brands, gaming
          consoles and mobile devices. Plug & play, no installation or driver
          needed`,
    },
    {
      icon: <BluetoothIcon />,
      title: `WIRELESS WITH BLUETOOTH`,
      description: `Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.`,
    },
    {
      icon: <BatteryIcon />,
      title: `HIGH CAPACITY BATTERY`,
      description: `Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.`,
    },
    {
      icon: <LightIcon />,
      title: `RGB BACKLIT MODES`,
      description: `Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions.`,
    },
  ]

  return (
    <FeaturesContainer>
      {featuresArr.map((f, i) => (
        <Feature key={`${f.title}-${i}`}>
          <IconContainer>{f.icon}</IconContainer>
          <FeatureBody>
            <StyledH3>{f.title}</StyledH3>
            <StyledParagraph>{f.description}</StyledParagraph>
          </FeatureBody>
        </Feature>
      ))}
    </FeaturesContainer>
  )
}

export default Features
