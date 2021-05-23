import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const AllProjectmanager = (props) => {
  const [ allProjectmanager, setAllProjectmanager ] = useState([]);

  useEffect(() => {
    // axios call the route for getAll
    axios.get('http://localhost:8000/api/projectmanagers')
      .then((res) => {
        console.log(res.data);  // this is the body that we see in postman's results
        setAllProjectmanager(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [])

  return (
    <div>
      <h1>All Project Manager</h1>
      {/* map out the projectmanagers objects */}
      {
        allProjectmanager.map(( projectmanagers, index ) => (
          <p key={ index }>
            Title: <Link to={"/projectmanagers/" + projectmanagers._id }>{ projectmanagers.Title }</Link>
          </p>
        ))
      }
    </div>
  )
}

export default AllProjectmanager;