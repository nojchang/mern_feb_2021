import React, { Component } from 'react';
import './Projects.css';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes,
      title: this.props.title
    };
    //state is murable, can be change. ex: likes, this is creating the element, and the bottom like = () => is updating it.
  }

  like = () => {
    this.setState({ 'likes': this.state.likes + 1 });
    // this setState method is to update the likes number that is click. 
  }

  render() {
    // this.props is created when we render the component
    // all jsx attributes that are passed in from App.js become
    // key / value pairs inside the props object
    // props = { title: "project title", desc: "project description"}, props are read only, they are immurable, they cannot be change directly. Give limitation, ex:if you are naming something, that name cannot be changed. 
    const { desc } = this.props;

    return (
      <div className="ProjectStyle">
        <h4>{ this.state.title }</h4>
        <button onClick={ this.like }>Like Project</button>
        <p>Likes: { this.state.likes }</p>
        <p>Description:</p>
        <p> { desc } </p>
      </div>
    )
  }
}

export default Project;