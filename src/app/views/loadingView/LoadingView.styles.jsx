import styled from "styled-components";
import { flip } from "../../styles/animations";

export const LoadingViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Loader = styled.img`
  width: 8rem;
  animation: ${flip} 10s linear infinite;
`;
