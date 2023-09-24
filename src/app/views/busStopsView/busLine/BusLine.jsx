import React from "react";
import * as Styled from "./BusLine.styles";

export const BusLine = ({ line, stops, isSelected, onClick }) => {
  return (
    <Styled.BusLineWrapper $isSelected={isSelected} onClick={onClick}>
      <span>Linje {line}</span>
      <span>{stops.length} stopp</span>
    </Styled.BusLineWrapper>
  );
};
