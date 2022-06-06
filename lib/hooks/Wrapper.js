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
import { ServerScannerProvider } from "../context/ServerScanner";
export var API_KEY = "123abc";
export var Wrapper = function (_a) {
    var children = _a.children;
    return (_jsx(ServerScannerProvider, __assign({ apiKey: API_KEY }, { children: children })));
};
export default Wrapper;
