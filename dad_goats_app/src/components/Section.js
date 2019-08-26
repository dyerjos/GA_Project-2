import React from 'react';
import Card from './Card'

function Section(props) {
console.log('this is jokes in section.js', props)

  return (
    <div>
      <h1>I am Section</h1>
      <Card
        joke1= {props.joke1}
        id1= {props.id1}
        name1= {props.name1}
      />
      <Card
        joke2= {props.joke2}
        id2= {props.id2}
        name2= {props.name2}
      />
    </div>
  );
}

export default Section;
