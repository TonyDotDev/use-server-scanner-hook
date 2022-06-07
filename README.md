# @vrisingdev/use-server-scanner-hook

Library for querying V Rising dedicated server data using ReactJS. This library is built with the [V Rising Server Scanner API](https://rapidapi.com/InfamyStudio/api/vrising-server-scanner). If you have not already, click the link and register for an API key.

[![npm version](https://badge.fury.io/js/@vrisingdev%2Fuse-server-scanner-hook.svg)](https://badge.fury.io/js/@vrisingdev%2Fuse-server-scanner-hook)
[![Build Status](https://app.travis-ci.com/NeverEnder4/use-server-scanner-hook.svg?branch=main)](https://app.travis-ci.com/NeverEnder4/use-server-scanner-hook)
[![Maintainability](https://api.codeclimate.com/v1/badges/54b88c18616286c47554/maintainability)](https://codeclimate.com/github/NeverEnder4/use-server-scanner-hook/maintainability)
[![Downloads/week](https://img.shields.io/npm/dw/open-source-npm-package-template.svg)](https://npmjs.org/package/@vrisingdev/use-server-scanner-hook)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/NeverEnder4/use-server-scanner-hook/blob/main/package.json)

## Getting Started

### Installation

- with NPM
  
  ```$ npm install @vrisingdev/use-server-scanner-hook``` 
- with Yarn 
  
  ```$ yarn @vrisingdev/use-server-scanner-hook```

### Usage

**index.js**

Compose your entire app or the component that will be consuming the useServerScanner hook with the ServerScannerProvider component. Pass the V Rising Server Scanner API key to the provider via the apiKey prop.

```
...

import { ServerScannerProvider } from "@vrisingdev/use-server-scanner-hook";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ServerScannerProvider apiKey={API_KEY}>
      <App />
    </ServerScannerProvider>
  </React.StrictMode>
);
```



**FunctionalComponent.js**

In a functional child component, import the useServerScanner hook and pass in a config object containing the host IP and query port of the V Rising server. This hook will return an object containing an error and data field. If the request is successful you will receive data. If the request fails, you'll receive an error message.

```
import { useServerScanner } from "@vrisingdev/use-server-scanner-hook";

function FunctionalComponent() {

  const { data, error } = useServerScanner({ host: HOST, queryPort: QUERY_PORT });
  
  ...
}

export default FunctionalComponent;

```

## License

@vrisingdev/use-server-scanner-hook is licensed under the [MIT License](https://github.com/NeverEnder4/use-server-scanner-hook/blob/main/LICENSE).

