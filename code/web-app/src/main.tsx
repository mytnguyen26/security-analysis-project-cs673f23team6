/*  main.ts  */

import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store/index";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { message } from "antd";
message.config({
  duration: 2,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
