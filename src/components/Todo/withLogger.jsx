import React from 'react';

const withLogger = (WrappedComponent) => {
  
  return (props) => { 
          const date = new Date();
    console.log(`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} - ${date.getHours()}.${date.getMinutes()} ${props.title} ${props.doneTaskLogger}`); 
    
  
   
    return <WrappedComponent {...props} />;
  };
};
export default withLogger;

