import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';


function App() {

  const [ boxColorArr, setBoxColorArr ] = useState([]);

  return (
    <div className="App">
      <h1>Box Generator</h1>
      <Form boxColorArr={ boxColorArr } setBoxColorArr={ setBoxColorArr } />
      <Display boxColorArr={ boxColorArr } />  
      
    </div>
  );
}

export default App;