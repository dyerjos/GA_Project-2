import React from 'react';
import { Route } from 'react-router-dom'
import Card from './Card'

function Home(props) {
  let buttonStyles = {
    position: 'relative',
    textAlign: 'center',
    width: '33%',
    fontSize: '15px',
  }

  return (

    <div>
      {/* <h1>Home</h1> */}
      <Card
        text= {props.standardText.text}
        name= {props.standardText.name}
        goat= {props.standardText.goat}
      />
      <button
        type="button"
        style={buttonStyles}
        onClick={props.onclick1}

        >Make Dad Goat
      </button>
      <button
      type="button"
      style={buttonStyles}
      onClick={props.onclick3}

      >Send to Favorites
      </button>
      <button
        type="button"
        style={buttonStyles}
        onClick={props.onclick2}

        >Make Enlightened Goat
      </button>
    </div>
  );
}

export default Home;
