import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import configureStore from "./store";

import AppProvider from "./components/AppContext";
import App from "./components/App";

const store = configureStore();

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <AppProvider>
        <App />
      </AppProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);
