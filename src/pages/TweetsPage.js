import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import TweetList from "../components/TweetList";
import SingleTweet from "../components/SingleTweet";

import "./TweetsPage.css";

const TweetsPage = () => {
  let match = useRouteMatch();

  return (
    <div className="cat-facts-page">
      <h1>Tweets</h1>

      <Switch>
        <Route path={`${match.url}/:tweetId`}>
          <SingleTweet />
        </Route>

        <Route path={match.url}>
          <TweetList />
        </Route>
      </Switch>
    </div>
  );
};

export default TweetsPage;
