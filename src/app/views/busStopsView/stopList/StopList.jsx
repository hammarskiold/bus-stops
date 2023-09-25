import React from "react";
import * as Styled from "./StopList.styles";
import { v4 as uuidv4 } from "uuid";

export const StopList = ({ directions = [] }) => {
  const renderDirection = (direction, stops) => {
    return (
      <Styled.Direction>
        <Styled.DirectionHeader>Riktning {direction}</Styled.DirectionHeader>
        {stops.map((s) => (
          <Styled.Stop key={uuidv4()}>{s.StopPointName}</Styled.Stop>
        ))}
      </Styled.Direction>
    );
  };

  return (
    <Styled.StopListWrapper>
      {Object.keys(directions).map((direction) =>
        renderDirection(direction, directions[direction])
      )}
    </Styled.StopListWrapper>
  );
};
