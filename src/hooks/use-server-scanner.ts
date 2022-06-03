import React, { useState, useEffect, useContext } from 'react'

import { URL, X_RAPID_API_HOST } from "../api";
import { ServerScannerContext } from "../context/ServerScanner";
import { ContextValue } from "../context/types";

type UseServerScannerProps = {
  host: string | undefined
  queryPort: string | undefined
};

type FetchServerProps = {
  host: string
  queryPort: string
  apiKey: string
}

const useServerScanner = ({ host, queryPort }: UseServerScannerProps) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const { apiKey }: ContextValue = useContext(ServerScannerContext);

  useEffect(() => {
    const fetchServer = async ({ host, queryPort, apiKey }: FetchServerProps) => {
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

      if (data.message) setError(data.message)
    
      else setData(data);
    };

    if (host && queryPort && apiKey) fetchServer({ host, queryPort, apiKey });

  }, [host, queryPort, apiKey]);

  return { data, error };
};

export default useServerScanner;