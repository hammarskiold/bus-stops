export const getStopsByLine = (stops, journeys) => {
  return journeys?.reduce((acc, journey) => {
    const { LineNumber, JourneyPatternPointNumber } = journey;
    const stop = stops.find(
      ({ StopPointNumber }) => StopPointNumber === JourneyPatternPointNumber
    );
    if (Object.keys(acc).includes(LineNumber)) {
      return {
        ...acc,
        [LineNumber]: [...acc[LineNumber], stop],
      };
    }
    return { ...acc, [LineNumber]: [stop] };
  }, {});
};

export const getTop10StopsByLine = (stopsByLine) => {
  const busLinesWithStopsCount = Object.entries(stopsByLine).map(
    ([lineNumber, stops]) => ({
      lineNumber,
      stopsCount: stops.length,
    })
  );

  busLinesWithStopsCount.sort((a, b) => b.stopsCount - a.stopsCount);

  const top10BusLines = busLinesWithStopsCount.slice(0, 10);

  const busStopsByTop10Lines = {};
  top10BusLines.forEach(({ lineNumber }) => {
    busStopsByTop10Lines[lineNumber] = stopsByLine[lineNumber];
  });

  return busStopsByTop10Lines;
};
