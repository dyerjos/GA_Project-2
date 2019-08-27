import { Route } from 'react-router-dom'
import React from 'react';
import { Link } from 'react-router-dom'



function Header() {

  let navStyles = {
    display: 'flex'
  }

  let ulStyles = {
    display: 'flex',
    'listStyle': 'none',

  }

  let aStyles = {
    padding: '30px'
  }

  return (
     <nav style={navStyles} >
       <ul style={ulStyles}>
         <li style={aStyles}><Link to="/">Home</Link></li>
         <li style={aStyles}><Link to="/Jokes">Jokes</Link></li>
         <li style={aStyles}><Link to="/Inspiration">Inspiration</Link></li>
         <li style={aStyles}><Link to="/Favorites">Favorites</Link></li>
         <li style={aStyles}><Link to="/About">About</Link></li>
       </ul>
     </nav>

  );
}

export default Header;
