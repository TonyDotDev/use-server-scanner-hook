import { renderHook } from '@testing-library/react-hooks';
import useServerScanner from "./use-server-scanner";
import { Wrapper, API_KEY } from "./Wrapper";
describe("useServerScanner hook", function () {
    var QUERY_PORT = "81223";
    var HOST = "12.99.192.122";
    var mockData = {
        "name": "Valheim 2",
        "map": "VRisingWorld",
        "password": false,
        "maxplayers": 10,
        "players": [],
        "bots": [],
        "connect": "92.38.148.199:28200",
        "ping": 187
    };
    var mockError = {
        message: "Unauthorized"
    };
    it('returns the correct data on successful query', function () {
        var mockFetch = jest.fn(function (_a) {
            var onResponse = _a.onResponse;
            onResponse(mockData);
        });
        var _a = renderHook(function () { return useServerScanner({ host: HOST, queryPort: QUERY_PORT, customFetch: mockFetch }); }, {
            wrapper: Wrapper,
        }), result = _a.result, rerender = _a.rerender;
        expect(result.current.data).toStrictEqual(expect.objectContaining(mockData));
    });
    it('returns the correct error message', function () {
        var mockFetch = jest.fn(function (_a) {
            var onResponse = _a.onResponse;
            onResponse(mockError);
        });
        var _a = renderHook(function () { return useServerScanner({ host: HOST, queryPort: QUERY_PORT, customFetch: mockFetch }); }, {
            wrapper: Wrapper,
        }), result = _a.result, rerender = _a.rerender;
        expect(result.current.error).toBe(mockError.message);
    });
    it('passes the correct arguments to customFetch', function () {
        var mockFetch = jest.fn(function (_a) {
            var onResponse = _a.onResponse;
            onResponse(mockData);
        });
        var _a = renderHook(function () { return useServerScanner({ host: HOST, queryPort: QUERY_PORT, customFetch: mockFetch }); }, {
            wrapper: Wrapper,
        }), result = _a.result, rerender = _a.rerender;
        expect(mockFetch.mock.calls[0][0].host).toBe(HOST);
        expect(mockFetch.mock.calls[0][0].queryPort).toBe(QUERY_PORT);
        expect(mockFetch.mock.calls[0][0].apiKey).toBe(API_KEY);
    });
});
