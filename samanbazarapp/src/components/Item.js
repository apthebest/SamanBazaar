import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'
import {Link} from 'react-router-dom'
const Item = ({id,title,price,img}) => {
  const {cartItems,setCartItems,setModal,modal} = useGlobalContext();

    
  return (
   <section className = "main-item">
         <img className='item-img' src={img} alt="item-img" />
    <div className="item-container">
        <Link className='item-link' to={`/item/${id}`}>{title}</Link>
        <p>Price:{price}$</p>
        {/* <button className='add-btn' onClick={addToCart} >Add To Cart</button> */}
    </div>
   </section>
  )
}

export default Item