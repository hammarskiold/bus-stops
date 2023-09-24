import { getStopsByLine, getTop10StopsByLine } from "./App.logic";
import {
  stops,
  journeys,
  journeysWithDuplicates,
  stopsByLine,
} from "../test/mockData";

describe("BusStopsView", () => {
  it("should get correct stops for a bus line", () => {
    const result = getStopsByLine(stops, journeys);

    expect(result[1]).toEqual([stops[0], stops[1]]);
  });

  it("should get correct stops for another bus line", () => {
    const result = getStopsByLine(stops, journeys);

    expect(result[2]).toEqual([stops[0], stops[2], stops[3]]);
  });

  //   it("should remove stop duplicates for a journey", () => {
  //     const result = getStopsByLine(stops, journeysWithDuplicates);

  //     expect(result[1]).toEqual([stops[0], stops[1]]);
  //   });

  it("should get the bus lines with the 10 most stops", () => {
    const result = getTop10StopsByLine(stopsByLine);
    const busLines = Object.keys(result);

    expect(busLines).toHaveLength(10);
    expect(busLines.includes(1)).toBe(false);
    expect(busLines.includes(7)).toBe(false);
  });
});
