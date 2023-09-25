export const getStopsByLine = (stops, journeys) => {
  return journeys?.reduce((acc, journey) => {
    const { LineNumber, JourneyPatternPointNumber, DirectionCode } = journey;
    const stop = stops.find(
      ({ StopPointNumber }) => StopPointNumber === JourneyPatternPointNumber
    );

    if (!stop) {
      return acc;
    }

    if (!acc[LineNumber]) {
      acc[LineNumber] = {};
    }

    if (!acc[LineNumber][DirectionCode]) {
      acc[LineNumber][DirectionCode] = [stop];
    } else {
      if (
        !acc[LineNumber][DirectionCode].some(
          (s) => s.StopPointName === stop.StopPointName
        )
      ) {
        acc[LineNumber][DirectionCode].push(stop);
      }
    }

    return acc;
  }, {});
};
export const getTop10StopsByLine = (stopsByLine) => {
  const busLinesWithStopsCount = Object.entries(stopsByLine).map(
    ([lineNumber, directions]) => {
      const direction1Stops = directions[1] || [];
      const direction2Stops = directions[2] || [];

      const stopsCount = Math.max(
        direction1Stops.length,
        direction2Stops.length
      );

      return {
        lineNumber,
        stopsCount,
      };
    }
  );

  busLinesWithStopsCount.sort((a, b) => b.stopsCount - a.stopsCount);

  const top10BusLines = busLinesWithStopsCount.slice(0, 10);

  const busStopsByTop10Lines = {};
  top10BusLines.forEach(({ lineNumber }) => {
    busStopsByTop10Lines[lineNumber] = stopsByLine[lineNumber];
  });

  return busStopsByTop10Lines;
};
