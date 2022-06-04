import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { ServerScannerProvider } from "../context/ServerScanner"
import useServerScanner from "./use-server-scanner";
import { Wrapper, API_KEY } from "./Wrapper";

describe("useServerScanner hook", () => {
  const QUERY_PORT = "81223";
  const HOST = "12.99.192.122";

  it('returns the correct data on successful query', () => {

    const mockData = {
      "name": "Valheim 2",
      "map": "VRisingWorld",
      "password": false,
      "maxplayers": 10,
      "players": [],
      "bots": [],
      "connect": "92.38.148.199:28200",
      "ping": 187
    };
    
    const mockFetch = jest.fn(({ onResponse }) => { onResponse(mockData); });
  
    const { result, rerender } = renderHook(
      () => useServerScanner({ host: HOST, queryPort: QUERY_PORT, customFetch: mockFetch }),
      { 
        wrapper: Wrapper,
      },
    );
  
    expect(result.current.data).toStrictEqual(expect.objectContaining(mockData));
  });

  it('returns the correct error message', () => {
    const mockError = {
      message: "Unauthorized"
    }
    const mockFetch = jest.fn(({ onResponse }) => { onResponse(mockError); });
  
    const { result, rerender } = renderHook(
      () => useServerScanner({ host: HOST, queryPort: QUERY_PORT, customFetch: mockFetch }),
      { 
        wrapper: Wrapper,
      },
    );
  
    expect(result.current.error).toBe(mockError.message);
  });

  it('passes the correct arguments to customFetch', () => {
    const mockData = {
      "name": "Valheim 2",
      "map": "VRisingWorld",
      "password": false,
      "maxplayers": 10,
      "players": [],
      "bots": [],
      "connect": "92.38.148.199:28200",
      "ping": 187
    };

    const mockFetch = jest.fn(({ onResponse }) => { onResponse(mockData); });
  
    const { result, rerender } = renderHook(
      () => useServerScanner({ host: HOST, queryPort: QUERY_PORT, customFetch: mockFetch }),
      { 
        wrapper: Wrapper,
      },
    );
  
    expect(mockFetch.mock.calls[0][0].host).toBe(HOST);
    expect(mockFetch.mock.calls[0][0].queryPort).toBe(QUERY_PORT);
    expect(mockFetch.mock.calls[0][0].apiKey).toBe(API_KEY);
  });
});
