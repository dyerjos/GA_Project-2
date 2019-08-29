import { Route } from 'react-router-dom'
import React from 'react';
import { Link } from 'react-router-dom'

function Header() {

  let navStyles = {
    display: 'flex',
    textDecoration: 'none'
  }

  let ulStyles = {
    display: 'flex',
    'listStyle': 'none',
  }

  let liStyles = {
    padding: '30px',

  }

  return (
     <nav style={navStyles} >
       <ul style={ulStyles}>
         <li style={liStyles}><Link to="/">Home</Link></li>
       <li style={liStyles}><Link to="/Favorites">Favorites</Link></li>
       <li style={liStyles}><Link to="/About">About</Link></li>
       </ul>
     </nav>

  );
}

export default Header;
