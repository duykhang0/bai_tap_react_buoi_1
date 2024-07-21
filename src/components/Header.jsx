import React from 'react'
import "../assets/css/header.scss"
const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <p>Start Bootstrap</p>
            <ul>
            <li><a className='active' href="#">Home</a></li> 
            <li><a href="#">About</a></li> 
            <li><a href="#">Service</a></li> 
            <li><a href="#">Contact</a></li> 
            </ul>
        </div>
        
    </header>
  )
}

export default Header