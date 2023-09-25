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
            <Styled.BusLines>
              {Object.keys(stopsByLine).map((line) => (
                <BusLine
                  key={line}
                  line={line}
                  directions={stopsByLine[line]}
                  isSelected={selectedBusLine === line}
                  onClick={() => setSelectedBusLine(line)}
                />
              ))}
            </Styled.BusLines>
          </Styled.Column>
          <Styled.Column>
            <StopList directions={stopsByLine[selectedBusLine]} />
          </Styled.Column>
        </>
      )}
    </Styled.BusStopsViewWrapper>
  );
};
