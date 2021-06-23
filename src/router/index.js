import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Pilot from "../views/Pilot";
import Ranking from "../views/Ranking";

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Ranking />
        </Route>
        <Route path="/pilot/:id">
          <Pilot />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Router;
