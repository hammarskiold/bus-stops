import React, { useState } from "react";
import { BusLine } from "./busLine/BusLine";
import * as Styled from "./BusStopsView.styles";
import { StopList } from "./stopList/StopList";

export const BusStopView = ({ stopsByLine }) => {
  const [selectedBusLine, setSelectedBusLine] = useState();

  return (
    <Styled.BusStopsViewWrapper>
      {stopsByLine && (
        <>
          <Styled.Column>
            {Object.keys(stopsByLine).map((line) => (
              <BusLine
                key={line}
                line={line}
                stops={stopsByLine[line]}
                isSelected={selectedBusLine === line}
                onClick={() => setSelectedBusLine(line)}
              />
            ))}
          </Styled.Column>
          <Styled.Column>
            <StopList stops={stopsByLine[selectedBusLine]} />
          </Styled.Column>
        </>
      )}
    </Styled.BusStopsViewWrapper>
  );
};