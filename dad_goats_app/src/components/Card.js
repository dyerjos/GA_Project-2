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
    marginRight: '25px',
    marginLeft: '25px',
    marginBottom: '20px',
    left: '10%',
    right: '10%',

  }

  let nameStyles = {
    textAlign: 'right',
    fontSize: '20px',
    right: '10%',
    paddingRight: '15%',
    // marginTop: '-15px'
  }

  let imageStyles = {
    display: 'flex',
    display: 'column',
    border: '6px solid white',
    borderRadius: '20px',
    width: '70%',
    height: 'auto',
  }
console.log('this is props in card', props)

  return (
    <div>
      <div>
      </div>
      <div className="container" style={containerStyles}>
        {/* <img src="{props.goat}" alt="Goat" style={imageStyles}/> */}
        <img src={props.goat} alt="Goat" style={imageStyles}/>
        <div className="top-text" style={textStyles}>
        <h2>{props.text}</h2>
        {/* <h2>{props.joke2}{props.jokeFave}</h2> */}
      <h3 style={nameStyles}>- {props.name} the goat</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
