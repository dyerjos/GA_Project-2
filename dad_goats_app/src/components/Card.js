import React from 'react';

function Card(props) {
console.log('this is jokes in card.js', props)
console.log('this is name1 in card.js', props.name1)

  let containerStyles = {
    position: 'relative',
    textAlign: 'center',
    color: 'white'
  }

  let textStyles = {
    position: 'absolute',
    top: '5%',
    fontSize: '10px',
    left: '10%',
    right: '10%'
  }

  let nameStyles = {
    textAlign: 'right',
    right: '10%',
    paddingRight: '15%'
  }

  return (
    <div>
      <div>
        <h1>I am Card</h1>
      </div>
      <div className="container" style={containerStyles}>
        <img src="https://www.nps.gov/common/uploads/stories/images/nri/20161004/articles/B2091E24-1DD8-B71B-0B39299C92809B35/B2091E24-1DD8-B71B-0B39299C92809B35.jpg" alt="Goat"/>
      <div className="top-text" style={textStyles}>
        <h2>{props.joke1}</h2>
        <h2>{props.joke2}</h2>
        <h3 style={nameStyles}>- {props.name1}{props.name2} the goat</h3>

      </div>
      </div>
    </div>
  );
}

export default Card;
