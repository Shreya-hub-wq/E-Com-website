import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItem = () => {
    const{all_product,CartItems,removefromCart } = useContext(ShopContext);
  return (
    // ---- creating the structure of cart 
    <div className='cartitems'>
<div className="cartitems-formain">
    <p>Products</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>
</div>
<hr />
{all_product.map((e)=>{
if(CartItem[e.id]>0)
    {
return <div>
    
     {/* using map method to showing the product data   */}
<div className="cart-format">
    <img src= {e.image} className='cart-icon-pro'/>
    <p>{e.name}</p>
    <p>${e.new_price}</p>
    <button className='quantity'>{CartItems[e.id]}</button>
    <p>{e.new_price*CartItems[e.id]}</p>
    <img src={remove_icon} onClick={()=>{removefromCart(e.id)}}/>
</div>
</div>

}
})}
    </div>
  )
}

export default CartItem