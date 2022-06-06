import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ServerScannerProvider } from "./context/ServerScanner";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ServerScannerProvider apiKey={process.env.REACT_APP_X_RAPIDAPI_KEY || ""}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ServerScannerProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
