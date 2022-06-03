import React from 'react';

import { ContextValue, ProviderProps } from "./types";

export const ServerScannerContext = React.createContext<ContextValue>({ apiKey: "" });

export const ServerScannerProvider = ({ children, apiKey }: ProviderProps) => {

	const value: ContextValue = { apiKey }

	return <ServerScannerContext.Provider value={value}>{children}</ServerScannerContext.Provider>;
};

