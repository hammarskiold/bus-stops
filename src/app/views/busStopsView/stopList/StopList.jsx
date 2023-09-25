import React from "react";
import * as Styled from "./StopList.styles";
import { v4 as uuidv4 } from "uuid";
import arrow from "../../../assets/icons/arrow.svg";

export const StopList = ({ directions = {} }) => {
  const renderStops = (stops) => {
    return (
      <Styled.Stops>
        {stops.map((s) => (
          <Styled.Stop key={uuidv4()}>{s.StopPointName}</Styled.Stop>
        ))}
      </Styled.Stops>
    );
  };

  return (
    <Styled.StopListWrapper>
      <Styled.DirectionsHeader>
        <Styled.Direction>
          Riktning 1 <Styled.DirectionIcon src={arrow} />
        </Styled.Direction>
        {directions[2] && (
          <Styled.Direction>
            Riktning 2 <Styled.DirectionIcon src={arrow} $rotate />
          </Styled.Direction>
        )}
      </Styled.DirectionsHeader>
      <Styled.Directions>
        {Object.values(directions).map(renderStops)}
      </Styled.Directions>
    </Styled.StopListWrapper>
  );
};
