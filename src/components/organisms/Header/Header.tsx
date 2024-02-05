import React from 'react';
import './Header.sass';
import Navbar from '../../molecules/Navigation';
function Header() {
  return (
    <header>
      <div className='header-div'>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
