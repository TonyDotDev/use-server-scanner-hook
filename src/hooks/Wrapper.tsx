import React from 'react';

import { ServerScannerProvider } from "../context/ServerScanner";

type WrapperProps = {
  children: JSX.Element
}

export const API_KEY="123abc";

export const Wrapper = ({ children }: WrapperProps) => (
  <ServerScannerProvider apiKey={API_KEY}>
    {children}
  </ServerScannerProvider>
);

export default Wrapper;