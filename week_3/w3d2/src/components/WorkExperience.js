import React, { useState} from 'react';


const WorkExperience = (props) => {
  // The alt. props object looks like this after it is passed in from App.js  

  //  const { propResults: results, setResultsKey: setResults } =  props;
  
  // {
  //   propResults: results, // state getter that was created in App.js
  //   setResultsKey: setResults, // state setter method created in App.js
  // }

  const { results, setResults } =  props;
  const [ getEmployer, setEmployer ] = useState("");
  const [ employerErr, setEmployerErr ] = useState("");
  const [ years, setYears ] = useState(0);
  const [ position, setPosition ] = useState("");
  const [ salary, setSalary ] = useState(0);
  const [ location, setLocation ] = useState("");
  
 
    //display the entire form at one time
  const handleSubmit = (e) => {
    e.preventDefault();

    if(getEmployer.length < 1) {
      setEmployerErr("You must include an employer to submit work experience")
      // stop before you add bad data to state!
      return; 
    }

    // combine all input data into a single object
    const newExperience = {
      expEmployer: getEmployer,
      expYears: years,
      expPosition: position,
      expSalary: salary,
      expLocation: location,
    }
   

    //combine all previous experience along with the new experience object
    setResults( [ newExperience, ...results ] ); 

    setEmployer("");
    setEmployerErr(""); // reset to make sure we don't show an error all the time
    setYears(0);
    setPosition("");
    setSalary(0);
    setLocation("");

  }

  // const test = (fieldName, minLength) => {
  //   if (getEmployer.length < 1) {
  //     return <span>You must include an {fieldName}</span>
  //   } else if (getEmployer.length < minLength) {
  //     return <span>employer names must be atleast {minLength}  characters long</span>
  //   } else {
  //     return <span>Thank you for entering an {fieldName}</span>
  //   } 
  // }

  return(
    <div>
    <h3>Tell us about your Experience!</h3>
    <form onSubmit={ handleSubmit }>

      <div>
        <label>Employer:</label>
        <input 
          type="text"
          name="employer"
          value={ getEmployer }
          onChange={ (e) => setEmployer(e.target.value) }
        />

      {/* teritary condiional statement */}
        {
        getEmployer.length < 1 ?   // if statement
           <span className="errorSpan">You must include an employer</span>   // else statement
          : getEmployer.length < 4 ?  // if statement 
           <span className="errorSpan">employer names must be atleast 4 characters long</span>
          : null   // else statement, don't display anything at all when the condition is true
        }
          {/* {getEmployer.length < 10 ?
          test()
          <span>Thank you for entering an employer</span> 
          : null
        } */}
        {
          employerErr ? 
            <span>{employerErr}</span>
            : null
        }
      </div>

      <div>
        <label>Years of Experience:</label>
        <input 
          type="number"
          name="years"
          step="0.1"
          value={ years }
          onChange={ (e) => setYears(e.target.value) }
        />
      </div>

      <div>
        <label>Position:</label>
        <input 
          type="text"
          name="position"
          value={ position }
          onChange= { (e) => setPosition(e.target.value) }
        />
      </div>

      <div>
        <label>Salary:</label>
        <input 
          type="number"
          name="salary"
          value={ salary }
          onChange= { (e) => setSalary(e.target.value) }
        />
      </div>

      <div>
        <label>Location:</label>
        <input 
          type="text"
          name="location"
          value={ location }
          onChange= { (e) => setLocation(e.target.value) }
        />
      </div>

      <button type="submit">Submit Experience</button>
    </form>


    </div>
  )
}

export default WorkExperience;
