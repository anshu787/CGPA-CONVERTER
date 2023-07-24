import React from 'react'
import './/Navbar.css'

const Navbar = () => {
  return (
    <nav>
    <div className='neew'>
        <div className='nav-left'>
            <a href='/'><h1>CGPA CONVERSION</h1></a>
        </div>
        <div className='nav-right'>
            <ul className='nav-items'>
                <li className='nav-links'>
                    <a href=''>Converters</a>
                </li>
            </ul>
     
        </div>
    </div>
   </nav>
  )
}

export default Navbar