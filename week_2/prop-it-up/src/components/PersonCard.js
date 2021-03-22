import React, { Component } from 'react';

class PersonCard extends Component{
  constructor(props) {
    super(props);

    this.state = {
      ageIncrease: this.props.age,
    };
  }
  render(){
    const { firstName, lastName, age, hair } = this.props;
    return(
      <div className="container">
         <h2>
           {lastName}, {firstName}
         </h2>
         <p>Age: {this.state.ageIncrease}</p>
         <p>Hair Color: {hair}</p>
         <button onClick={() => this.setState( {ageIncrease: this.state.ageIncrease = 1})}>
         </button>
      </div>
    );
  }
}

export default PersonCard