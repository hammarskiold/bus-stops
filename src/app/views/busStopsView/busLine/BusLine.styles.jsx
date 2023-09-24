import styled from "styled-components";

export const BusLineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  width: 15rem;
  box-shadow: -10px 11px 0px -2px rgba(0, 0, 0, 0.75);
  margin-bottom: 1rem;
  padding: 0 1rem;
  background-color: ${(p) =>
    p.$isSelected
      ? p.theme.colors.primary.active
      : p.theme.colors.primary.main};

  &:hover {
    cursor: pointer;
    background-color: ${(p) => p.theme.colors.primary.higlight};
    /* box-shadow: -8px 8px 0px -2px rgba(0, 0, 0, 0.75); */
    /* margin-left: -2px; */
  }
`;

export const StopName = styled.div``;

export const Line = styled.div``;
