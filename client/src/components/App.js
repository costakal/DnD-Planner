import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Header from "./Header";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Header />
          <Route exact path="/"></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
