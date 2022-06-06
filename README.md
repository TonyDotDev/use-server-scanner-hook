# @vrisingdev/use-server-scanner-hook

Library for querying V Rising dedicated server data using ReactJS.

[![Version](https://img.shields.io/npm/v/open-source-npm-package-template.svg)](https://npmjs.org/package/@vrisingdev/use-server-scanner-hook)
[![Downloads/week](https://img.shields.io/npm/dw/open-source-npm-package-template.svg)](https://npmjs.org/package/@vrisingdev/use-server-scanner-hook)
[![License](https://img.shields.io/npm/l/open-source-npm-package-template.svg)](https://github.com/NeverEnder4/use-server-scanner-hook/package.json)

## Getting Started

### Installation

- with NPM
  
  ```$ npm install @vrisingdev/use-server-scanner-hook``` 
- with Yarn 
  
  ```$ yarn @vrisingdev/use-server-scanner-hook```

### Usage

**index.js**
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ServerScannerProvider } from "@vrisingdev/use-server-scanner-hook";
import App from './App';

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
```
import { useServerScanner } from "@vrisingdev/use-server-scanner-hook";

function FunctionalComponent() {

  const { data, error } = useServerScanner({ host: HOST, queryPort: QUERY_PORT });
  
  ...
}

export default FunctionalComponent;

```

## License

@vrisingdev/use-server-scanner-hook is licensed under the [MIT License](https://github.com/NeverEnder4/use-server-scanner-hook/LICENSE).

