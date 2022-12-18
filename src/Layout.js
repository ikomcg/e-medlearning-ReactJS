import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

const Layout = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
        <div>
          <Header/>
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout