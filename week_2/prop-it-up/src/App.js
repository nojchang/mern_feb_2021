import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
     <PersonCard 
     lastName={"Peter"}
     firstName={"Pan"}
     age={14}
     hair={"Green"}
     />
     <PersonCard 
     lastName={"Smith"}
     firstName={"Jason"}
     age={40}
     hair={"Orange"}
     />
     <PersonCard 
     lastName={"Cruise"}
     firstName={"Tom"}
     age={30}
     hair={"Brown"}
     />
     <PersonCard 
     lastName={"Gaga"}
     firstName={"Lady"}
     age={32}
     hair={"red"}
     />

    </div>
  );
}

export default App;
