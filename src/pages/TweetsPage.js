import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import TweetList from "../components/TweetList";
import UserSingleTweet from "../components/UserSingleTweet";

// import "./TweetsPage.css";

const TweetsPage = () => {
  let match = useRouteMatch();

  return (
    <div  className="tweets-page">
      <h1>Tweets</h1>

      <Switch>
        <Route path={`${match.url}/:userTweetId`}>
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
