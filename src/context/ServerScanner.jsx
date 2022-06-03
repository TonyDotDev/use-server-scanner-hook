import React from 'react';
import PropTypes from 'prop-types';

export const ServerScannerContext = React.createContext(null);

export const ServerScannerProvider = ({ children, apiKey }) => {
	return <ServerScannerContext.Provider value={{ apiKey }}>{children}</ServerScannerContext.Provider>;
};

