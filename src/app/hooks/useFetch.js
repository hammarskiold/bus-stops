import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const _data = await response.json();
      setData(_data?.ResponseData?.Result);
    })();
  }, []);

  return data;
};
