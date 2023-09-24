import React from "react";
import * as Styled from "./StopList.styles";
import { v4 as uuidv4 } from "uuid";

export const StopList = ({ stops }) => {
  return (
    <Styled.StopListWrapper>
      {stops &&
        stops.map((s) => (
          <Styled.Stop key={uuidv4()}>{s.StopPointName}</Styled.Stop>
        ))}
    </Styled.StopListWrapper>
  );
};
