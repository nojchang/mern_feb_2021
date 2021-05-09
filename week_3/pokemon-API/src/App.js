
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response => {
      return response.json() //return the data from response object in json format
    })
    .then(response => {
      setPokemon(response.results)  //json converted data is stored in state, and is displayed
    })
    .catch((err) => {
      console.log(err);
    })
  },[]);  // empty array in the 2nd parameter prevents useEffect from running more than once

  return (
    <div className="App" 

    style={{ 
      width: "100px", 
      margin: "auto" 
      }}>

      <ul>  
        {
          pokemon.map((pokemonObj, index)=> {

            return (
          
            <li key={index}> 
            {pokemonObj.name}
            </li>
            )  
          
          })
        }
      </ul>
    </div>
  );

}

export default App;
