import React from 'react';

const validationComponent = (props) => {
    let validationMsg = null;
  
    if (props.textLength < 5) {
      validationMsg = (<p>Text too short</p>);
    } else {
      validationMsg = (<p>Text long enough</p>);
    }
    
    return (
      <div>
        {validationMsg}
      </div>
    );
};

export default validationComponent;