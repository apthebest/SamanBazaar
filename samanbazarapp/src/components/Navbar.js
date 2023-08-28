import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineShoppingCart } from "react-icons/ai";
import { useGlobalContext } from '../context';
import {FaBars} from 'react-icons/fa'
const Navbar = () => {
  const {cartItems,toggleSidebar} = useGlobalContext();
  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <nav className={"navbar"}>
       <button className="toggle-btn" onClick={toggleSidebar}><FaBars ></FaBars></button> 
    <Link to="/" className='home-link'>SamanBazaar</Link>
    
           
      <ul className='nav-links'>
        
          <Link className='link' to="/">Home</Link>        
          <Link className='link' to="/about">About</Link>
                <Link className='link' style={{fontSize:'1.2rem'}}  to="/cart"><AiOutlineShoppingCart></AiOutlineShoppingCart><span style={{fontSize:'1rem'}}>{cartItems.length>0?`(${cartItems.length})`:''}</span></Link>

          
       
      </ul>
    </nav>
  )
}

export default Navbar