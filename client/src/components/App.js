import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Home from "./Home";
import CampaignSelect from "./Campaign/CampaignSelect/CampaignSelect";
import CombatTracker from "./Combat/CombatTracker";
import {
  loadMonsters,
  gettingMonsterList,
  loadMonsterDetails,
  getMonsterDetails,
} from "../actions";

const App = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.currentUserReducer.currentUser);

  useEffect(() => {
    fetch("/monsters")
      .then((res) => res.json())
      .then((data) => {
        dispatch(loadMonsters());
        dispatch(gettingMonsterList(data));
      });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetch("/allmonsters")
      .then((res) => res.json())
      .then((data) => {
        dispatch(loadMonsterDetails());
        dispatch(getMonsterDetails(data));
      });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route exact path="/campaign">
          <CampaignSelect />
        </Route>
        <Route path="/campaign/:campaign/overview"></Route>
        <Route path="/combat">
          <CombatTracker />
        </Route>
      </Switch>
      {loggedIn ? <Redirect to="/campaign" /> : <Redirect to="/home" />}
    </>
  );
};

export default App;
