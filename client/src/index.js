import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import AppContainer from "./App";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./reducers/reducer.js";

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
