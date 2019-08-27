import React from 'react';
import { Route } from 'react-router-dom'
import Section from './Section'

function Jokes(props) {
  return (
    <div>
      <h1>Jokes Page</h1>
      <Section
        joke1= {props.joke1}
        id1= {props.id1}
        name1= {props.name1}
        joke2= {props.joke2}
        id2= {props.id2}
        name2= {props.name2}
      />
    </div>
  );
}

export default Jokes;
