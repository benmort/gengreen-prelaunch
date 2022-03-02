import React from "react"

import styled from "styled-components"

import TreeIcon from "../images/shared/tree.svg"
import MoneyIcon from "../images/shared/money.svg"
import EarthIcon from "../images/shared/earth.svg"
import InvestIcon from "../images/shared/invest.svg"

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
  background: #5cab7d;
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 48px;
  color:white;
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
      icon: <EarthIcon />,
      title: `COMBAT CLIMATE CHANGE`,
      description: `Everyone can help limit climate change. Planting trees in deforested areas can make a real difference.`,
    },
    {
      icon: <MoneyIcon />,
      title: `EARN INTEREST`,
      description: `Generate financial returns while also creating a positive environmental impact.`,
    },
    {
      icon: <TreeIcon />,
      title: `INCREASE BIODIVERSITY`,
      description: `Reforestation is a critical means of addressing the decline of global biodiversity.`,
    },
    {
      icon: <InvestIcon />,
      title: `INVEST YOUR WAY`,
      description: `Micro-investing is about making small and irregular investments from everyday transactions.`,
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
