import React from 'react'

import amazon from'../Assets/amazon.png'
import flipcart from'../Assets/flipkart.png'
import shoe_image from'../Assets/shoe_image.png'

const Hero = () => {
  return (
    <div>
      <main className='hero container'>
        <div className='hero-content'>
       
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          
         
         <div className="hero-btn">
          <button>Shop Now </button>
          <button className='secondary-btn'>Catagory</button>

          <div className="shooping">
            <p>Also Available On</p>
           <div className="brand-icons">
            <img src={amazon} alt="mazon-logo" />
            <img src={flipcart} alt="flipcart-logo" />
           </div>

           
          </div>
         </div>

        </div>
        
        <div className="hero-image">
            <img src={shoe_image} alt="shoe-image" />
        </div>
      </main>

    </div>
  )
}

export default Hero
