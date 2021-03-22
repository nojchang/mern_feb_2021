// 1. Lifting State, 
// 2. conditional Rendering, 
// 3. Map, 
// 4. Mult. Params for Callback functions


import './App.css';
import React, { useState } from 'react';
import WorkExperience from './components/WorkExperience';
import DisplayExperience from './components/DisplayExperience';

function App() {
  const [ results, setResults ] = useState([]);

  return (
    <div className="App">
        {/* Common naming convertion is to have the key the same as the value name */}
      <WorkExperience 
      results={ results}  
      setResults={ setResults } 
      propsKey = { "The props value for propsKey" }
      />
      <hr />
      <DisplayExperience results={ results }/>

      {/* I can call my props keys whatever I want */}
      {/* <WorkExperience propResults={results} setResultsKey={setResults} /> */}
    </div>
  );
}

export default App;
