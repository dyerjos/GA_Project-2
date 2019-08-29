import React from 'react';
import { Route } from 'react-router-dom'
import Card from './Card'

function Inspiration(props) {
console.log('this is inspiration props', props)
  return (

    <div>
      <Card
        text= {props.standardText.text}
        name= {props.standardText.name}
      />
    </div>
  );
}

export default Inspiration;
