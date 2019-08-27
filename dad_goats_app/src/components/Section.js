import React from 'react';
import Card from './Card'

function Section(props) {

  let buttonStyles = {
    position: 'relative',
    textAlign: 'center',
    width: '50%',
    fontSize: '20px',
  }

  return (
    <div>
      <Card
        joke1= {props.joke1}
        id1= {props.id1}
        name1= {props.name1}
      />
      {/* <Card
        joke2= {props.joke2}
        id2= {props.id2}
        name2= {props.name2}
      /> */}
      <button type="button" style={buttonStyles}>Make Dad Goat</button>
    <button type="button" style={buttonStyles}>Send to Favorites</button>
    </div>
  );
}

export default Section;
