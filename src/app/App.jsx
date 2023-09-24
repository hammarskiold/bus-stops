import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import { getStopsByLine, getTop10StopsByLine } from "./App.logic";
import { BusStopView } from "./views/busStopsView/busStopsView";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { LoadingView } from "./views/loadingView/LoadingView";
import * as Styled from "./App.styles";

const proxyUrl = import.meta.env.VITE_PROXY_URL;

function App() {
  const [top10StopsByLine, setTop10StopsByLine] = useState();
  const [stops, isLoadingStops] = useFetch(`${proxyUrl}/stops`);
  const [journeys, isLoadingJourneys] = useFetch(`${proxyUrl}/journeys`);

  useEffect(() => {
    if (stops && journeys) {
      const stopsByLine = getStopsByLine(stops, journeys);
      setTop10StopsByLine(getTop10StopsByLine(stopsByLine));
    }
  }, [stops, journeys]);

  return (
    <ThemeProvider theme={theme}>
      <Styled.AppWrapper>
        {isLoadingStops || isLoadingJourneys ? (
          <LoadingView />
        ) : (
          <BusStopView stopsByLine={top10StopsByLine} />
        )}
      </Styled.AppWrapper>
    </ThemeProvider>
  );
}

export default App;
