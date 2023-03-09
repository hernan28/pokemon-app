import styled from "styled-components";

const WhiteContainer = styled.div`
  background-color: ${(props) => props.bgColor};
`;

const ContainerWithBgColor = ({ bgColor, children }) => (
  <WhiteContainer bgColor={bgColor}>{children}</WhiteContainer>
);

export default ContainerWithBgColor;
