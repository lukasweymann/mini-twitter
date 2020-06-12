import React from "react";
import "./App.css";

import SideMenu from "./components/SideMenu";
import LoginPage from './LoginPage';
import Routes from "./routing/Routes";

function App() {
  return (
    <div className="App">
      <LoginPage />
      <Routes />
    </div>
  );
}

export default App;
