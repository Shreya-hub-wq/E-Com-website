import React from 'react'
import './Offers.css'
import exclucive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
<div className="offers-left">
    <h1>Exclusive</h1>
    <h1>Offers For you</h1>
    <p>ONLY ON BEST SELLERS PRODUCT</p>
    <button>Check Now</button>
</div>
<div className="offers-right">
    <img src={exclucive_image}/>
</div>
    </div>
  )
}

export default Offers