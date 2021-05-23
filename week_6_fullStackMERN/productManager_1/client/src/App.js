import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import AllProjectmanager from './components/AllProjectmanager';
import ProjectmanagerDetails from './components/ProjectmanagerDetails';
import NewProjectmanager from './components/NewProjectmanager';
import EditProjectmanager from './components/EditProjectmanager';

function App() {
  return (
    <div className="App">
       <Router>
        <AllProjectmanager path="/projectmanagers" />
        <ProjectmanagerDetails path="/projectmanagers/:id" />
        <NewProjectmanager path="/projectmanagers/new" />
        <EditProjectmanager path="/projectmanagers/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
