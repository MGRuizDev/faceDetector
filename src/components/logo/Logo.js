import React from 'react';
import Tilt from 'react-tilt'
import './logo.css';
import logo from './logo.png';

const Logo = () => {
  return (
    <div className=" ml4 mt0">
       <Tilt className="Tilt shadow-2 br1" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
         <div className="Tilt-inner"><img src={logo} alt="This is the logo"/></div>
       </Tilt>
    </div>
  );
}

export default Logo;