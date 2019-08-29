import React from 'react';
import { Route } from 'react-router-dom'
import Section from './Section'
import Card from './Card'

function Jokes(props) {
  console.log('this is jokes props', props)
  return (
    <div>
      {/* <h1>Jokes Page</h1> */}
      <Card
        text= {props.standardText.text}
        name= {props.standardText.name}
      />
    </div>
  );
}

export default Jokes;
