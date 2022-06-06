import { useState, useEffect, useContext } from 'react'

import { URL, X_RAPID_API_HOST } from "../api";
import { ServerScannerContext } from "../context/ServerScanner";
import { ContextValue } from "../types/Context";
import { ServerScannerData } from "../types/Data";

type UseServerScannerProps = {
  host: string | undefined
  queryPort: string | undefined,
  customFetch?: Function
};

type FetchServerProps = {
  host: string
  queryPort: string
  apiKey: string
  onResponse: Function
}

const useServerScanner = ({ host, queryPort, customFetch }: UseServerScannerProps) => {
  const [data, setData] = useState<ServerScannerData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { apiKey }: ContextValue = useContext(ServerScannerContext);

  function onResponse(data:ServerScannerData | null ) {
    if (data?.message) setError(data.message)
    else setData(data);
  }

  useEffect(() => {
    console.log("EFFECTED")
    const fetchServer = async ({ host, queryPort, apiKey, onResponse }: FetchServerProps) => {
      const url = `${URL}/${host}/${queryPort}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Host": X_RAPID_API_HOST,
          "X-RapidAPI-Key": apiKey,
        },  
      });

      const data = await response.json();

      if (typeof onResponse === 'function') onResponse(data);
    };

    if (!host || !queryPort || !apiKey) return;

    if (typeof customFetch === "function") customFetch({ host, queryPort, apiKey, onResponse });
    
    else fetchServer({ host, queryPort, apiKey, onResponse });
    
  }, [host, queryPort, apiKey, customFetch]);

  return { data, error };
};

export default useServerScanner;