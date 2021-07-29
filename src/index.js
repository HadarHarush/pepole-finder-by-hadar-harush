import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import "./main.css";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>,
  document.querySelector("#root")
);
