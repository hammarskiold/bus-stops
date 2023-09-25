import React from "react";
import * as Styled from "./BusLine.styles";

export const BusLine = ({ line, directions, isSelected, onClick }) => {
  const maxNumStops = directions[2]
    ? Math.max(directions[1].length, directions[2].length)
    : directions[1].length;

  return (
    <Styled.BusLineWrapper $isSelected={isSelected} onClick={onClick}>
      <span>Linje {line}</span>
      <span>{maxNumStops} stopp</span>
    </Styled.BusLineWrapper>
  );
};
