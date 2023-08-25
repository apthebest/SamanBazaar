import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineShoppingCart } from "react-icons/ai";
import { useGlobalContext } from '../context';
import {FaBars} from 'react-icons/fa'
const Navbar = () => {
  const {cartItems,openSidebar} = useGlobalContext();
  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <nav className={"navbar"}>
        <Link to="/" className='home-link'>SamanBazaar</Link>
     <button className="toggle-btn" onClick={openSidebar}><FaBars ></FaBars></button> 
    
           
      <ul className='nav-links'>
        
          <Link className='link' to="/">Home</Link>        
          <Link className='link' to="/about">About</Link>
         
          <Link className='link' style={{fontSize:'1.5rem'}} to="/cart"><AiOutlineShoppingCart></AiOutlineShoppingCart><span style={{fontSize:'1rem'}}>{cartItems.length>0?`(${cartItems.length})`:''}</span></Link>
       
      </ul>
    </nav>
  )
}

export default Navbar