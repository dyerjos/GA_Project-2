import React from 'react';
import { Route } from 'react-router-dom'
import Card from './Card'
function Home(props) {
// console.log('this is jokes in home', props.jokes)
  return (
    <div>
      {/* <h1>Home</h1> */}
      <Card
        text= {props.standardText.text}
        name= {props.standardText.name}
      />
    </div>
  );
}

export default Home;
