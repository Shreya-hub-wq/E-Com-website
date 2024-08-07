import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'


const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext (ShopContext);
  return (
    <div className='productdisplay'>
<div className="productdisplay-left">
<div className="productdisplay-img-list">
    <img src={product.image}/>
    <img src={product.image}/>
    <img src={product.image}/>
    <img src={product.image}/>
</div>
<div className="productdisplay-img">
    <img className='productdisplay-main-img' src={product.image}/>
</div>
</div>
<div className="productdisplay-right">
<h1>{product.name}</h1>
<div className="productdisplay-right-start">
    <img src={star_icon}/>
    <img src={star_icon}/>
    <img src={star_icon}/>
    <img src={star_icon}/>
    <img src={star_dull}/>
    <p>(122)</p>
</div>
<div className="productdisplay-right-price">
    <div className="productdisplay-right-oldprice">${product.old_price}</div>
    <div className="productdisplay-right-newprice">${product.new_price}</div>
</div>
<div className="productdisplay-right-description">
    A lightweight,usually knitted, pullover shirt, close-fittingand round neckline and shoet sleeves
    worn as an undershirt or outer garment..
</div>
<div className="productdisplay-right-size">
    <h1>Select Size</h1>
    <div className="productdisplay-right-sizes">
        <div>S</div>
        <div>M</div>
        <div>L</div>
        <div>XL</div>
        <div>XXL</div>
    </div>
</div>
<button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
<p className='productdisplay-right-category'><span>Category :</span>Women, T-Shirt, Crop-top</p>
<p className='productdisplay-right-category'><span>Tags :</span>Modern ,Latest ,  </p>
</div>
    </div>
  )
}

export default ProductDisplay