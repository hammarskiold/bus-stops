import styled from "styled-components";

export const BusStopsViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
  min-width: 30rem;
  background-color: ${(p) => p.theme.colors.layout.depth0};
  border-radius: 1rem;
`;

export const Column = styled.div`
  flex: 1;
  padding: 2rem;
`;

export const BusLines = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
`;
