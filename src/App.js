import React, { useState } from "react";
import "./App.css";
import LoginPage from "./LoginPage";
import Routes from "./routing/Routes";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const setAuth = () => {
    setAuthenticated(true);
  };

  return (
    <div className="App">
      {!authenticated && <LoginPage setAuth={setAuth} />}
      {authenticated && <Routes />}
    </div>
  );
}

export default App;
