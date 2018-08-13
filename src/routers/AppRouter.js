import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import TabsPage from "../components/TabsPage";
import Friends from "../components/Friends";
import HomePage from "../components/HomePage";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import { connect } from "react-redux";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/friends" component={Friends} />
        <Route path="/colleges" component={TabsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
