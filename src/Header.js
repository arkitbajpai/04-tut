import React from 'react'
import { FaLaptop, FaTablet, FaMobileAlt } from 'react-icons/fa'

const Header = ({ title, width }) => {
  return (
    <header className='Header'>
      <h1>{title}</h1>
      {width < 600 
        ? <FaMobileAlt /> 
        : width < 900 
          ? <FaLaptop /> 
          : <FaTablet />}
    </header>
  )
}

export default Header
