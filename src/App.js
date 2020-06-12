import React from "react";
import "./App.css";

import SideMenu from "./components/SideMenu";
import Routes from "./routing/Routes";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <Routes />
    </div>
  );
}

export default App;
