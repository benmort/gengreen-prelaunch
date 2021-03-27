import styled from "styled-components"
import { breakpoints } from "./vars"

const StyledContainer = styled.div`
  display: flex;
  padding: 24px 24px 0;
  overflow-x: hidden;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 40px 40px 0;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 55px 165px 0;
  }
`
export default StyledContainer
