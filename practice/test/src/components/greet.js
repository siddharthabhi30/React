
import React from 'react';
import ReactDOM from 'react-dom';

//if this is directly exported we have to get its exact name
const Greet=(props)=><h1 onClick={props.onClick}>hello world</h1>

//we can import this component with different name
export default Greet