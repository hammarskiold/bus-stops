import { useEffect, useState } from "react";

export const useStopsByBus = (stops, journeys) => {
  useEffect(() => {
    if (stops && journeys) {
      console.log(stops);
      console.log(journeys);
    }
  }, [stops, journeys]);
};
