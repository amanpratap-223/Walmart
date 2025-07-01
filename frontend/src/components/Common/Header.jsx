import React from 'react'
import Navbar from '../Layout/Navbar'
import Mainnavbar from '../Layout/Mainnavbar'

const Header = () => {
  return (
    <header className='border-b border-gray-200'>
      <Navbar/>
      <Mainnavbar/>
    </header>
  )
}

export default Header
