import React from 'react';

const charComponent = (props) => {
  const componentStyle = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  };
  
  return (
    <div style={componentStyle} onClick={props.click}>
      {props.children}
    </div>
  );
};

export default charComponent;