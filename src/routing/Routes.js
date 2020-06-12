import React from "react";
import { Switch, Route } from "react-router-dom";

import MessagesPage from "../pages/Messages";
import NotificationsPage from "../pages/Notifications";
import HomePage from "../pages/TweetsPage";
import ProfilePage from "../pages/ProfilePage";
import AboutPage from "../pages/AboutPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="messages">
        <MessagesPage />
      </Route>
      <Route path="notifications">
        <NotificationsPage />
      </Route>
      <Route path="profile">
        <ProfilePage />
      </Route>
      <Route path="about">
        <AboutPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};

export default Routes;
