import { getStopsByLine, getTop10StopsByLine } from "./App.logic";
import {
  stops,
  journeys,
  journeysWithDuplicates,
  stopsByLine,
} from "./test/mockData";

describe("BusStopsView", () => {
  it("should get correct stops for a bus line", () => {
    const result = getStopsByLine(stops, journeys);
    const line1Direction1 = result[1][1];

    expect(line1Direction1).toEqual([stops[0], stops[1]]);
  });

  it("should get correct stops for another bus line", () => {
    const result = getStopsByLine(stops, journeys);
    const line2Direction1 = result[2][1];

    expect(line2Direction1).toEqual([stops[0], stops[2], stops[3]]);
  });

  it("should split stops based on direction", () => {
    const result = getStopsByLine(stops, journeysWithDuplicates);

    const line1Directions = result[1];
    const line1Direction1 = line1Directions[1];
    const line1Direction2 = line1Directions[2];

    expect(Object.keys(line1Directions)).toHaveLength(2);
    expect(line1Direction1).toEqual([stops[0], stops[1]]);
    expect(line1Direction2).toEqual([stops[1]]);
  });

  it("should get the bus lines with the 10 most stops", () => {
    const result = getTop10StopsByLine(stopsByLine);
    const busLines = Object.keys(result);

    expect(busLines).toHaveLength(10);
    expect(busLines.includes(1)).toBe(false);
    expect(busLines.includes(7)).toBe(false);
  });
});
