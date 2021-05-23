import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const ProjectmanagerDetails = (props) => {
  const { id } = props;
  const [ projectmanager, setprojectmanager ] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/api/projectmanagers/" + id)
      .then((res) => { 
        console.log(res.data);
        setprojectmanager(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <div>
      <h1>{ projectmanager.name }</h1>

      <p>
        Title: {projectmanager.Title}
      </p>
      <p>
        Price: {projectmanager.Price}
      </p>
      <p>
        Description: {projectmanager.Description}
      </p>
  
    </div>
  )
}

export default ProjectmanagerDetails;