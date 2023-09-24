import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const _data = await response.json();
      setIsLoading(false);
      setData(_data?.ResponseData?.Result);
    })();
  }, []);

  return [data, isLoading];
};
