import React, { useState } from 'react';

  const MyForm = () => {

    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword] = useState("");

  const formDataDivStyle = {
    textAlign: "left", 
    width: "250px", 
    margin: "auto",
  }

  const inputDataDivStyle = {
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    border: "1px solid darkgrey",
    padding: "0px 10px",
    textAlign: "left", 
    width: "350px", 
    margin: "auto",
  }

  return (
    <div>
      <form style = {{ margintop: "20px" }}>

        <div style = { inputDataDivStyle }> 
          <label htmlFor = "firstName">First Name</label>
          <input type="text" name="firstName" onChange= { (e) => setFirstName(e.target.value) } 
          />

          {
            firstName.length < 2 ?
            <span>First Name must be at least 2 characters.</span>

            : null
          }
        </div>
        

        <div style = { inputDataDivStyle }> 
          <label htmlFor = "lastName">Last Name</label>
          <input type="text" name="lastName" onChange= { (e) => setLastName(e.target.value) } 
          />

          {
            lastName.length < 2 ?
            <span>Last name must be at least 2 characters.</span>

            : null
          }
        </div>

        <div style = { inputDataDivStyle }> 
          <label htmlFor = "email">Email</label>
          <input type="text" name="email" onChange= { (e) => setEmail(e.target.value) } 
          />

{
            email.length < 5 ?
            <span>Email must be at least 5 characters.</span>

            : null
          }

        </div>

        <div style = { inputDataDivStyle }> 
          <label htmlFor = "password">Password</label>
          <input type="password" name="password" onChange= { (e) => setPassword(e.target.value) } 
          />

          {
          password.length < 8 ?
          <span>Password must be at least 8 characters.</span>

          : null
          }

        </div>

        <div style = { inputDataDivStyle }> 
          <label htmlFor = "confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" onChange= { (e) => setConfirmPassword(e.target.value)} 
          />

        {
          confirmPassword.length < 8 ?
          <span>Confirm Password must be at least 8 characters.</span>

          : null
        }

        {
          password !== confirmPassword ?
          <span>Password do not match!</span>

          : null
        }

        </div>
      </form>

      <div style= { formDataDivStyle }>
        <h3 style={{ textAlign: 'center' }}> Your Form Data</h3>
        <p>
          <label>First Name: </label>{ firstName }
        </p>
        <p>
          <label>Last Name: </label>{ lastName }
        </p>
        <p>
          <label>Email: </label>{ email }
        </p>
        <p>
          <label>Password: </label>{ password }
        </p>
        <p>
          <label>Confirm Password: </label>{ confirmPassword }
        </p>
      </div>

    </div>
  )

}

export default MyForm;