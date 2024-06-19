import React from 'react';
import zippy from './zippy.svg';
import logo2 from './logo2.svg';
import set from './set.svg';
import bell from './bell.svg';
import login from './login.png';


import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar" style={{ backgroundColor: '#D54029', alignContent: "space-between" }}>

      <div style={{ backgroundColor: 'transparent'}}>
        <img src={zippy} alt="Logo 1" />
      </div>


      <div style={{ display: "flex", flexDirection: "row", width: '100%', justifyContent: 'space-between' }}>
        <div className="navbar-brand" style={{ marginLeft: '130px' }}>
          <img src={logo2} alt="Logo 2" />
        </div>



        <ul className="navbar-menu">
          <div className="navbar-brand">
            <img src={set} alt="set" />
            <img src={bell} alt="bell" />
            <img src={login} alt="login" />
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
