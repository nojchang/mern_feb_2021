import React from 'react';

const Display = (props) => {
  const { boxColorArr } = props;


  return (
    <div>
      {
        boxColorArr.map((color, index) => (
          <div key={index} style={{ 
              display: "inline-block",
              margin: "20px",
              height: "100px", 
              width: "100px", 
              backgroundColor: color
              }}>
          </div>
        ))
      }
    </div>
  );
}

export default Display;