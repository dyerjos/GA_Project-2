import React from 'react';
import { Route } from 'react-router-dom'
import Section from './Section'

function Jokes(props) {
console.log('this is jokes in jokes.js', props)
  return (
    <div>
      <h1>I am Jokes</h1>
      <Section
        joke1= {props.joke1}
        id1= {props.id1}
        joke2= {props.joke2}
        id2= {props.id2}
      />
    </div>
  );
}

export default Jokes;
