import React from 'react'
import { useGlobalContext } from '../context'
import {BsFillArrowUpCircleFill,BsFillArrowDownCircleFill} from 'react-icons/bs'
import {GrAdd, GrSubtract} from 'react-icons/gr'
const CartItem = ({id,img,title,price,amount}) => {
  const {cartItems,setCartItems,removeCartItem} = useGlobalContext();

 
  const handleDecrease = (id)=>{
   
    setCartItems(prevCartItems => {
      return prevCartItems.map(item => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1>=1?item.amount-1:item.amount };
        }
        return item;
      });
    });
    }
    
  const handleIncrease = (id)=>{
     setCartItems(prevCartItems => {
      return prevCartItems.map(item => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
    });
    }
  return (
    <section className="cart-item">
      <ul className ="cart-list">
        <img src={img} alt="item-img" className='cart-img'/>
       <div className="cart-desc">
        <span>Item: <b>{title}</b>
        </span>
        <span>Price: <b>{price} $</b></span>
        
        <button className='remove-btn' onClick={()=>removeCartItem(id)}>Remove</button>
       </div>
      
      </ul>
      <div className="quantity">
        <span className='quantity-manip' style={{padding:' 0 0.2rem 0 0.2rem',borderRight:'1px solid rgb(179, 179, 167)'}} onClick ={()=>handleDecrease(id)} >- </span>
        <span style={{fontSize:'1rem',padding:'0 0.2rem 0 0.2rem'}} >{amount} </span> 
       <span  className='quantity-manip' style={{padding:' 0 0.1rem 0 0.1rem',borderLeft:'1px solid rgb(179, 179, 167)'}} onClick ={()=>handleIncrease(id)}>+</span>
      </div>
       
    </section>
  )
}

export default CartItem