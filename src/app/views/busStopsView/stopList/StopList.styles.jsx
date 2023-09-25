import styled from "styled-components";

export const StopListWrapper = styled.div`
  height: 80vh;
  min-width: 14rem;
  width: 25rem;
  background-color: ${(p) => p.theme.colors.layout.depth1};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const Stops = styled.div`
  flex: 1;
  padding: 1.5rem 0;
`;

export const Stop = styled.div``;

export const Directions = styled.div`
  height: 100%;
  display: flex;
  overflow-y: auto;
  padding-left: 1rem;
`;

export const Direction = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const DirectionIcon = styled.img`
  height: 1.5rem;
  fill: ${(p) => p.theme.colors.layout.text};
  ${(p) => p.$rotate && "transform: rotate(180deg)"};
`;

export const DirectionsHeader = styled.h2`
  display: flex;
  line-height: 2rem;
  width: 100%;
  background-color: ${(p) => p.theme.colors.layout.depth1};
  margin: 0;
  padding: 1rem 0 1rem 1rem;
  box-sizing: border-box;
  box-shadow: -2px 12px 34px -22px rgba(0, 0, 0, 0.74);
`;
