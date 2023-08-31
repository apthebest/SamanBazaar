import React from 'react'
import { Link } from 'react-router-dom'
// import {AiOutlineShoppingCart } from "react-icons/ai";
import { useGlobalContext } from '../context';
import {FaBars} from 'react-icons/fa'
import {BsFillCartFill} from 'react-icons/bs'



const Navbar = () => {
  const {cartItems,toggleSidebar} = useGlobalContext();
  
  return (
    <nav className={"navbar"}>
       <button className="toggle-btn" onClick={toggleSidebar}><FaBars ></FaBars></button> 
       <Link to="/" className='home-link'>SamanBazaar</Link>
          <Link className='cart-link'  to="/cart"> <BsFillCartFill></BsFillCartFill><span style={{fontSize:'1rem'}}>{cartItems.length>0?`(${cartItems.length})`:''}</span></Link>
    
           
      <ul className='nav-links'>
        
          <Link className='link' to="/">Home</Link>        
          <Link className='link' to="/products">Products</Link>        
          <Link className='link' to="/about">About</Link>
          <Link className='link'  to="/cart" style={{borderRight:'0.5px',borderColor:'white'}}> Cart <BsFillCartFill></BsFillCartFill><span style={{fontSize:'1rem'}}>{cartItems.length>0?`(${cartItems.length})`:''}</span></Link>

          
       
      </ul>
    </nav>
  )
}

export default Navbar