import React from 'react';
import '../style.css'
import globe from '../images/theGlobe.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={globe} alt="" />
      <h1 >my travel journal</h1>
    </div>

  )
}

export default Navbar;