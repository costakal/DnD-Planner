import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Home from "./Home";
import CampaignSelect from "./Campaign/CampaignSelect/CampaignSelect";
import SignIn from "./SignIn";

const App = () => {
  const loggedIn = useSelector((state) => state.currentUserReducer.currentUser);

  console.log(loggedIn);

  return (
    <>
      <GlobalStyles />
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home">
          <>
            <Header />
            <Home />
          </>
        </Route>
        <Route to="/campaign">
          <SignIn />
          <CampaignSelect />
        </Route>
        <Route to="/:campaign/overview"></Route>
      </Switch>
      {/* {loggedIn ? <Redirect to="/campaign" /> : <Redirect to="/home" />} */}
    </>
  );
};

export default App;
