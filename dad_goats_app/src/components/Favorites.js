import React from 'react';
import { Route } from 'react-router-dom'
import Card from './Card'

function Favorites(props) {
console.log('this is Favorites props', props)

  return (
    <div>
      <Card
        favorites= {props.favorites}
        nameFave= {props.nameFave}
        jokeFave= {props.nameFave}

      />
    </div>
  );
}

export default Favorites;
