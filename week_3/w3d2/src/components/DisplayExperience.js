import React, { useImperativeHandle } from 'react';

const DisplayExperience = (props) => {
  const { results } =props;
    /* display the object in the bottom of this form 
  map() is an array method - just like a for loop*/


  // sending addtional parameters:
  // 1. making our objects in to clickable links
  // 2. click to display all data in a pop ups
  const clickDetails =(e, expObj) => {
    alert(`
    The details for this Word Experience include:
    Employer: ${ expObj.expEmployer }
    Years Experiences: ${ expObj.expYears } 
    Position: ${ expObj.expPosition } 
    Salary: ${ expObj.expSalary } 
    Location: ${ expObj.expLocation } 

    `);
  }
  return(
  
  <div>
    <h3>You Typed in:</h3>
    {
      results.map((expObj, index) => (
        <div key={index}>
          <p>Employer: { expObj.expEmployer }</p>
          <button onClick={(e) => clickDetails(e, expObj)} > Click for Details </button>
          {/* <p>Years Experiences: { expObj.expYears } </p>
          <p>Position: { expObj.expPosition } </p>
          <p>Salary: { expObj.expSalary } </p>
          <p>Location: { expObj.expLocation } </p> */}
        </div>
       ))
    }
  </div>
  )
}

export default DisplayExperience;