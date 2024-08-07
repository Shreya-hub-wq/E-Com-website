import React from 'react'
import './Fotter.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Fotter = () => {
  return (
    <div className='fotter'>
<div className="fotter-logo">
    <img src= {footer_logo} alt="" />
    <p>SHOPPING TIME</p>
</div>
<ul className="fotter-link">
    <li>Company</li>
    <li>Products</li>
    <li>Offices</li>
    <li>About</li>
    <li>Contact</li>
</ul>
<div className="fotter-socials-icon">
    <div className="fotter-icons-container">
<img src={instagram_icon}/>
    </div>
    <div className="fotter-icons-container">
<img src={pintester_icon}/>
    </div>
    <div className="fotter-icons-container">
<img src={whatsapp_icon}/>
    </div>
</div>
<div className="fotter-copyright">
    <hr />
    <p>Copyright @2024 - All Right Reserve</p>
</div>
    </div>
  )
}

export default Fotter