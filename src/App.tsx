import React from 'react';

import useServerScanner from "./hooks/use-server-scanner";
import { ServerScannerResponse } from "./types";

function App() {
  const { data, error }: ServerScannerResponse = useServerScanner({ 
    host: process.env.REACT_APP_VRISING_HOST, 
    queryPort: process.env.REACT_APP_VRISING_QUERY_PORT 
  });

  function renderData({ data, error }: ServerScannerResponse) {
    if (data === null && error === null) return "Loading...";
    else if (data=== null && error) return error;
    else if (error === null && data) return JSON.stringify(data, null, 2);
    else return "Something went wrong..."
  }

  if (error) return null;
  return (
    <div style={{ 
      minHeight: "100vh", 
      width: "100%", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      }}
    >
      <pre>
        {renderData({ data, error })}
      </pre>
    </div>
  );
}

export default App;
