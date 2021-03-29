import React, { useState } from 'react';

const Form = (props) => {
  const { boxColorArr, setBoxColorArr } = props;

  
  const [ color, setColor] = useState("");
  
  const submitHandler = (event) => {
  
    event.preventDefault();

    setBoxColorArr( [ ...boxColorArr, color ] );
  }

  return (
    <div>
      <form onSubmit={ submitHandler } style={{ margin: "40px" }}>
        <div>
          <label htmlFor="firstName">Color</label>
          <input 
            type="text" 
            name="color"
            onChange={ (e) => setColor(e.target.value) }
          />
        </div>
        <button>Add</button>
      </form>

  </div>
  )
}

export default Form;