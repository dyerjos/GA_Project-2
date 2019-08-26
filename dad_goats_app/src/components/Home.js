import React from 'react';
import { Route } from 'react-router-dom'

function Home(props) {
console.log('this is jokes in home', props.jokes)
  return (
    <div>
      <h1>I am Home</h1>
    </div>
  );
}

export default Home;
