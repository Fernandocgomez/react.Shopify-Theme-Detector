import React from 'react';
import { Link } from 'react-router-dom';

function NavBAr() {
    return (
      <div className="nav-bar">

          <div className='logo'>

          <Link to='/' ></Link>

          <Link className='logo-text' to='/home'>Shopify Theme Detector</Link>
          

          </div>

          <div className='nav-links'>

            <a className='themes-link' href='https://themes.shopify.com/' target="_blank">Shopify Themes</a>

          </div>
          
        </div>
    );
  }
  
  export default NavBAr;