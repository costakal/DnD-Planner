import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Home from "./Home";
import CampaignSelect from "./Campaign/CampaignSelect/CampaignSelect";
import SignIn from "./SignIn";
import CombatTracker from "./Combat/CombatTracker";

const App = () => {
  const loggedIn = useSelector((state) => state.currentUserReducer.currentUser);

  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Header />
          <Home />
        </Route>
        <Route exact path="/campaign">
          <SignIn />
          <CampaignSelect />
        </Route>
        <Route path="/campaign/:campaign/overview"></Route>
        <Route path="/combat">
          <CombatTracker />
        </Route>
      </Switch>
      {/* {loggedIn ? <Redirect to="/campaign" /> : <Redirect to="/home" />} */}
    </>
  );
};

export default App;
