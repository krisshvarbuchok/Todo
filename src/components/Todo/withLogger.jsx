
import React from 'react';

const withLogger = (WrappedComponent) => {
  
  return (props) => { 
          const date = new Date();
    const logger = ()=>{
        console.log(`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} - ${date.getHours()}.${date.getMinutes()} ${props.title} ${props.task}`);
    }
    return <WrappedComponent {...props}  logger={logger}/>;
  };
};
export default withLogger;

