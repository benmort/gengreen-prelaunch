import styled from "styled-components"
import { weights, breakpoints as bp } from "./vars"

const StyledButton = styled.button`
  width: 151px;
  height: 48px;
  color: ${(props) => (props.textColor ? props.textColor : "#162542")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "default"};
  font-weight: ${weights.bold};
  border-style: none;
  border-radius: 8px;
  cursor: pointer;

  @media (min-width: ${bp.desktop}) {
    height: 58px;
  }

  &:hover {
    background: ${(props) =>
      props.backgroundHoverColor ? props.backgroundHoverColor : "#162542"};
    color: ${(props) =>
      props.textHoverColor ? props.textHoverColor : "#FFFFFF"};
  }
`

export default StyledButton
