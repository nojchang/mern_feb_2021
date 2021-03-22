import React, { Component } from 'react';

class AboutMe extends Component {
  render() {
    // <div style= {{ width: "400px", margin: "auto" }}></div>
    return (
      <div className="AboutMeDiv">
        <h4>This is about me!</h4>
        <p style={ { textAlign: "left" } }>
          I am new into coding, and I want to become
          a software engineer and work at a FAANG
          company. I decided to do Coding Dojo bootcamp, 
          and right now I am doing a 7 week course with MERN.
        </p>
      </div>
    )
  }
}

export default AboutMe;