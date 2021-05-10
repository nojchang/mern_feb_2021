import React from 'react';
import './App.css';
import { Router } from "@reach/router";
import HomeTest from "./components/HomeTest";

function App() {
  return (
    <div className="App">
    <Router>
      <HomeTest path="/home" />
      <HomeTest path="/:word" />
      <HomeTest path="/:word/:font/:bground" />
    </Router>
    </div>
  );
}

export default App;
