import React from 'react';
import { Route } from 'react-router-dom'
import Card from './Card'
function Inspiration(props) {
console.log('this is inspiration props', props)
  return (

    <div>
      <Card
        quote= {props.quote}
        id1= {props.id1}
        name1= {props.name1}
      />
    </div>
  );
}

export default Inspiration;
