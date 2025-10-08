import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'
import Logo from '../assets/logo.png'

const RootLayout = () => {

  return (
    <div className='font-inter'>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default RootLayout