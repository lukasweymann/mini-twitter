import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';

import UserSingleTweetFetcher from './components/UserSingleTweetFetcher';

function App() {
  let match = useRouteMatch();

  return (
    <div className="App">
      <h1>tweets facts page</h1>
      <Switch>
          <Route path={match.url} >
            <UserSingleTweetFetcher />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
