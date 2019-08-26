import React from 'react';

function Card(props) {
console.log('this is jokes in card.js', props)

  let containerStyles = {
    position: 'relative',
    textAlign: 'center',
    color: 'white'
  }

  let textStyles = {
    position: 'absolute',
    top: '5%',
    fontSize: '10px',
    left: '10%'
  }

  return (
    <div>
      <div>
        <h1>I am Card</h1>
        {/* <Name /> */}
      </div>
      <div class="container" style={containerStyles}>
        <img src="https://www.nps.gov/common/uploads/stories/images/nri/20161004/articles/B2091E24-1DD8-B71B-0B39299C92809B35/B2091E24-1DD8-B71B-0B39299C92809B35.jpg" alt="Goat"/>
      <div class="top-text" style={textStyles}>
        <h2>{props.joke1}</h2>
        <h2>{props.joke2}</h2>
      </div>
      </div>
    </div>
  );
}

export default Card;
