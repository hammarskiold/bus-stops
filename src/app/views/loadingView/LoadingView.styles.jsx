import styled from "styled-components";

export const LoadingViewWrapper = styled.div``;

export const Loader = styled.div`
  width: 6rem;
  height: 6rem;
  border: 8px solid ${(p) => p.theme.colors.primary.main};
  border-radius: 50%;
`;
