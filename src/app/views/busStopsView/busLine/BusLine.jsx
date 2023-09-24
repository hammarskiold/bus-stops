import React from "react";
import * as Styled from "./BusLine.styles";

export const BusLine = ({ line, stops, isSelected, onClick }) => {
  return (
    <Styled.BusLineWrapper $isSelected={isSelected} onClick={onClick}>
      <Styled.Line>Linje {line}</Styled.Line>
      <div> {stops.length} stopp</div>
    </Styled.BusLineWrapper>
  );
};
