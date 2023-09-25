import styled from "styled-components";

export const StopListWrapper = styled.div`
  height: 80vh;
  min-width: 14rem;
  width: 25rem;
  overflow-y: auto;
  background-color: ${(p) => p.theme.colors.layout.depth1};
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
`;

export const Stop = styled.div``;

export const Direction = styled.div``;

export const DirectionHeader = styled.h2`
  /* color: ${(p) => p.theme.colors.primary.main}; */
`;
