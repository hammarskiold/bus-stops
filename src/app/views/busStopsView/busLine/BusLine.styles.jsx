import styled from "styled-components";

export const BusLineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  min-width: 8rem;
  width: 100%;
  padding: 0 1rem;
  background-color: ${(p) =>
    p.$isSelected
      ? p.theme.colors.primary.active
      : p.theme.colors.primary.main};

  &:hover {
    cursor: pointer;
    background-color: ${(p) => p.theme.colors.primary.higlight};
  }
`;

export const StopName = styled.div``;
