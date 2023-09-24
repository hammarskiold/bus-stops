import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const BackgroundImage = styled.img`
  width: 150%;
  position: absolute;
`;

export const Overlay = styled.div`
  backdrop-filter: blur(10px);
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: 1;
`;

export const Content = styled.div`
  position: absolute;
  z-index: 2;
`;
