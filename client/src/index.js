import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { configStore } from "./redux/configStore";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={configStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
