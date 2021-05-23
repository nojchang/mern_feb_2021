import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const NewProjectmanager = (props) => {

  const [ newProjectmanager, setNewProjectmanager ] = useState({
    Title: "",
    Price: "",
    Description: "",
  })


  const inputChange = (e) => {
    console.log("input name: " + e.target.name);
    const inputName = e.target.name;
    console.log("input value: " + e.target.value);
    const inputValue = e.target.value;

    // creates a copy of the entire newHero object and puts the copy in updatedProjectmanager
    let updatedProjectmanager = { ...newProjectmanager };
    updatedProjectmanager[inputName] = inputValue;

    setNewProjectmanager(updatedProjectmanager);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/projectmanagers', newProjectmanager)
      .then((res) => {
        console.log(res.data);
        navigate("/projectmanagers");
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div>
      <h1>Create New Project Manager</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Title</label>
          <input 
            type="text"
            name="Title"
            value={ newProjectmanager.Title }
            onChange={ (e) => inputChange(e) }
            />
        </div>
        <div>
          <label>Price</label>
          <input 
            type="text"
            name="Price"
            value={ newProjectmanager.Price }
            onChange={ (e) => inputChange(e) }
            />
        </div>
        <div>
          <label>Description</label>
          <input 
            type="text"
            name="Description"
            value={ newProjectmanager.Description }
            onChange={ (e) => inputChange(e) }
            />
        </div>
        
        <button>Create</button>
      </form>
    </div>
  )
}

export default NewProjectmanager;