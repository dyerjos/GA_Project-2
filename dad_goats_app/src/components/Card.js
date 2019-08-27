import React from 'react';

function Card(props) {

  let containerStyles = {
    position: 'relative',
    textAlign: 'center',
    color: 'white'
  }

  let textStyles = {
    position: 'absolute',
    textShadow: '2px 2px black',
    fontSize: '20px',
    top: '2%',
    marginTop: '-20px',
    marginRight: '-20px',
    left: '10%',
    right: '10%',

  }

  let nameStyles = {
    textAlign: 'right',
    fontSize: '20px',
    right: '10%',
    paddingRight: '15%',
    marginTop: '-15px'
  }

  let imageStyles = {
    border: '6px solid white',
    borderRadius: '20px',
    width: '80%',
    height: 'auto',
  }

  return (
    <div>
      <div>
      </div>
      <div className="container" style={containerStyles}>
        <img src="https://www.nps.gov/common/uploads/stories/images/nri/20161004/articles/B2091E24-1DD8-B71B-0B39299C92809B35/B2091E24-1DD8-B71B-0B39299C92809B35.jpg" alt="Goat" style={imageStyles}/>
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
