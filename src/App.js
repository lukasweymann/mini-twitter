import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import LoginPage from "./LoginPage";

import HomePage from "./pages/HomePage";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const setAuth = () => {
    setAuthenticated(true);
  };
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
