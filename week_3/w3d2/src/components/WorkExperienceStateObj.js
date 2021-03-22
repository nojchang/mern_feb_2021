import React, { useState } from 'react';

const WorkExperience = () => {
  // const [ getEmployer, setEmployer ] = useState("");
  // const [ years, setYears ] = useState(0);
  // const [ position, setPosition] = useState("");
  // const [ salary, setSalary ] = useState(0);
  // const [ location, setLocation ] = useState("");
  // the following object can replace all of the individual state objects for inputs
  const [ workExp, setWorkExp ] = useState({
    employer: "",
    years: 0,
    position: "",
    salary: 0,
    location: "",
  })
  // const [ employerErr, setEmployerErr ] = useState("");
  // we will use an object to hold errors
  //    if a key exists, it will have an error message to show
  const [ expErrors, setExpErrors ] = useState({});
  const [ results, setResults ] = useState([]);


  const handleChange = (e) => {
    // using the event we can set the new value for a key while maintaining all previous values
    //    e.target.name   <-- this is the name of the input which MUST match the key in our state object
    //    e.target.value  <-- the new value from a specific input's onChange event that we need to store
    
    // validate the inputs and create error messages if needed
    validateInputs(e.target.name, e.target.value);

    // now update state
    setWorkExp({
      ...workExp,
      [e.target.name]: e.target.value,
    })
  }

  // set errors in state so they can display next to the inputs
  const validateInputs = (key, value) => {

    // using a switch statement allows me to compare strings instead of a bunch
    //    of if / else if / else if / else statements
    switch (key) {
      case "employer":
        if(value.length < 1) {
          // setExpErrors("You must include an employer to submit work experience")
          addExpErrors("employer", "You must include an employer to submit work experience")
        } else if(value.length < 5) {
          addExpErrors("employer", "Employer names must be at least 5 characters long")
        } else {
          // remove the key from the errors object
          delete expErrors.employer;
        }
        break;

      case "years":
        if(value <= 0) {
          addExpErrors("years", "You must have worked more than 0 years for this to count as experience")
        } else {
          // remove the key from the errors object
          delete expErrors.years;
        }
        break;

      //===================================================================
      // You will need to add the rest of the validations here
      //===================================================================
      
      // default is in the case that the key passed it does not match any of the cases above
      default:
        console.log('key not found in validate: ' + key);
    }
  }

  // creating a function to easily add an error to our errors object for display
  const addExpErrors = (key, value) => {
    setExpErrors({
      ...expErrors,
      [key]: value,
    })
  }

  // submitting a new experience to add to our list
  const handleSubmit = (e) => {
    // be sure to prevent the browser's default behavior of refreshing the page
    //    that will get rid of our state values!
    e.preventDefault();

    // we must have 0 error keys in our object if we want to submit a valid work experience
    //    the keys will be deleted if they have valid data
    if(Object.keys(expErrors).length > 0) {
      console.log("Errors found in submission.  Not adding this to the experience list yet.");
      console.log(expErrors);
      return;
    }
    // our new experience is already an object in state so we do not need to manually create it here
    //    here
    // const newExperience = {
    //   expEmployer: getEmployer,
    //   expYears: years,
    //   expPosition: position,
    //   expSalary: salary,
    //   expLocation: location,
    // }

    // combine all input data in to a single object
    // setResults( [ newExperience, ...results ] );
    setResults( [ workExp, ...results ] );

    // reset the values after successfully submitting it
    setWorkExp({
      employer: "",
      years: 0,
      position: "",
      salary: 0,
      location: "",
    });
    // setEmployer("");
    // setYears(0);
    // setPosition("");
    // setSalary(0);
    // setLocation("");

  }

  return (
    <div>
      <h3>Tell us about your Experience!</h3>
      <form onSubmit={ handleSubmit }>
        <div>
          <label>Employer:</label>
          <input 
            type="text"
            name="employer"
            value={ workExp.employer }
            onChange={ (e) => handleChange(e) }
          />
          {
            workExp.employer.length < 1 ? 
              <span>You must include an employer</span>
              : null
          }
          {
            expErrors.employer ? 
              <span>{ expErrors.employer }</span>
              : null
          }
        </div>
        <div>
          <label>Years of Experience:</label>
          <input 
            type="number"
            name="years"
            step="0.1"
            value={ workExp.years }
            onChange={ (e) => handleChange(e) }
          />
          {
            expErrors.years ? 
              <span>{ expErrors.years }</span>
              : null
          }
        </div>
        <div>
          <label>Position:</label>
          <input 
            type="text"
            name="position"
            value={ workExp.position }
            onChange={ (e) => handleChange(e) }
          />
        </div>
        <div>
          <label>Salary:</label>
          <input 
            type="number"
            name="salary"
            value={ workExp.salary }
            onChange={ (e) => handleChange(e) }
          />
        </div>
        <div>
          <label>Location:</label>
          <input 
            type="text"
            name="location"
            value={ workExp.location }
            onChange={ (e) => handleChange(e) }
          />
        </div>
        <button type="submit">Submit Experience</button>
      </form>

    {/* // display the object in the bottom of this form */}
      <h3>You typed in:</h3>
      {
        results.map((expObj, index) => (
          <div key={index}>
            <hr />
            {/* Adding a +1 so that we don't have work experience #0 */}
            <h5>Work Experience #{index + 1}</h5>
            <p>Employer: { expObj.employer }</p>
            <p>Years Experience: { expObj.years }</p>
            <p>Position: { expObj.position }</p>
            <p>Salary: { expObj.salary }</p>
            <p>Location: { expObj.location }</p>
          </div>
        ))
      }
    </div>
  )
}

export default WorkExperience;