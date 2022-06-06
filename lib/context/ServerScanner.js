var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
export var ServerScannerContext = React.createContext({ apiKey: "" });
export var ServerScannerProvider = function (_a) {
    var children = _a.children, apiKey = _a.apiKey;
    var value = { apiKey: apiKey };
    return _jsx(ServerScannerContext.Provider, __assign({ value: value }, { children: children }));
};
