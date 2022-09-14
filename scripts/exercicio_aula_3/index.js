"use strict";
const rootElement = document.querySelector('#root');
if (rootElement === null || rootElement === void 0 ? void 0 : rootElement.innerHTML)
    rootElement.innerHTML = "<h1>Hello world!</h1>";
