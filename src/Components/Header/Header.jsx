import React from 'react'

import Logo from '../../images/e-ml-logo.png';
import {Navbar} from './Navbar';
import Search from './Search';

import '../../Style/Header/style.css'

const Header = () => {
  return (
    <header className='px-10'>
      <div className='wrap flex justify-between items-center'>
        <img src={Logo} alt="" />
        <Navbar/>
        <Search/>
      </div>
    </header>

  )
}

export default Header