import React, { useState} from 'react';

const WorkExperience = () => {
  const [ getEmployer, setEmployer ] = useState("");
  const [ employerErr, setEmployerErr ] = useState("");
  const [ years, setYears ] = useState(0);
  const [ position, setPosition ] = useState("");
  const [ salary, setSalary ] = useState(0);
  const [ location, setLocation ] = useState("");
  const [ results, setResults ] = useState([]);
 
    //display the entire form at one time
  const handleSubmit = (e) => {
    e.preventDefault();

    if(getEmployer.length < 1) {
      setEmployerErr("You must include an employer to submit work experience")
      // stop before you add bad data to state!
      return; 
    }

    const newExperience = {
      expEmployer: getEmployer,
      expYears: years,
      expPosition: position,
      expSalary: salary,
      expLocation: location,
    }
   

    //combine all input data in to a single object
    setResults( [ newExperience, ...results ] ); 

    setEmployer("");
    setEmployerErr(""); // reset to make sure we don't show an error all the time
    setYears(0);
    setPosition("");
    setSalary(0);
    setLocation("");

  }

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
        {
          getEmployer.length < 1 ?
          <span>You must include an employer</span>
          : null
        }
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



    <h3>You Typed in:</h3>
    {
      results.map((expObj, index) => (
        <div>
          <p>Employer: { expObj.expEmployer }</p>
          <p>Years Experiences: { expObj.expYears } </p>
          <p>Position: { expObj.expPosition } </p>
          <p>Salary: { expObj.expSalary } </p>
          <p>Location: { expObj.expLocation } </p>
        </div>
      ))
    }
    </div>
  )
}

export default WorkExperience;
