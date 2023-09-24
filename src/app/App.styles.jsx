import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.colors.layout.depth0};
`;
