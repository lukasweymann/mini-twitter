import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import TweetList from "../components/TweetList";
import UserSingleTweet from "../components/UserSingleTweet";

import "./TweetsPage.css";

const TweetsPage = () => {
  let match = useRouteMatch();

  return (
    <div className="cat-facts-page">
      <h1>Tweets</h1>

      <Switch>
        <Route path={`${match.url}/:tweetId`}>
          <UserSingleTweet />
        </Route>

        <Route path={match.url}>
          <TweetList />
        </Route>
      </Switch>
    </div>
  );
};

export default TweetsPage;
