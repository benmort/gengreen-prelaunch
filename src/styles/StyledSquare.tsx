import styled from "styled-components"

const StyledSquare = styled.span`
  width: 255px;
  height: 240px;
  background: #e8eff2;
  border-radius: 20px;
  position: absolute;
  left: ${(props) => (props.left ? props.left : "")};
  top: ${(props) => (props.top ? props.top : "")};
  right: ${(props) => (props.right ? props.right : "")};
  bottom: ${(props) => (props.bottom ? props.bottom : "")};
`

export default StyledSquare
