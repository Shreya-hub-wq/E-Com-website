import React from 'react'
import './BreadCrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
// creating the header section of the each product page
const BreadCrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
HOME <img src= {arrow_icon}/> SHOP <img src= {arrow_icon}/> {product.category} <img src={arrow_icon}/> {product.name}
    </div>
  )
}

export default BreadCrum