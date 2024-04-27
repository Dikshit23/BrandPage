import React from 'react'

import brand_logo from '../Assets/brand_logo.png'

const Navigation = () => {
  return (
    <div>
      <nav className='container'>
         <div className="logo">
            <img src={brand_logo} alt="" />
         </div>

         <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contect</li>
            

         </ul>
         <button>Login</button>

      </nav>
    </div>
  )
}

export default Navigation
