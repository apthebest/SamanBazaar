import React from 'react'
import { useGlobalContext } from '../context';
import CartItem from '../components/CartItem';
import {BsEmojiSmileUpsideDownFill,BsFillBagFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
const Cart = () => {
  const {clearCart} = useGlobalContext();
  const {cartItems,setCartItems,modal,setModal} = useGlobalContext();
  
  //calculating the total order price and rounding off to 2 decimal places
    const finalAmount = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price* currentItem.amount;
}, 0).toFixed(2);
 
  const handlePlaceOrderClick = () => {
    setCartItems([]);
    setModal('Order placed successfully');
  }
  //setting the modal message as null 1 second after the order is placed
  React.useEffect(()=>{
    setTimeout(() => {
      setModal('');
    }, 2000);
  },[modal])

  if(cartItems.length === 0)
  return (
    
  <div className="empty-cart">
    
   <div className="modal-message">{modal}</div>
    {modal ===''? <>
    <div className="emoji-container"><BsEmojiSmileUpsideDownFill></BsEmojiSmileUpsideDownFill></div>
    <h3>Your Bag Seems To Be Empty.</h3>
    <Link to="/products" style={{padding:'2rem'}}>Continue Shopping...</Link>
    </>
    :''}
    </div>);
  return (
  
    <main className="cart">
      <div className="cart-header">
       Your Bag  <span style={{color:'grey',position:'relative',top:'0.1rem'}}><BsFillBagFill/></span>
      </div>  
      {cartItems.map((item)=>{
        return <CartItem key ={item.id} {...item}></CartItem>
      })}
      <p style={{fontSize:'1.2rem',textAlign:'center',marginBottom:'1rem'}}>You need to pay: <b>{finalAmount}$</b></p>
      <button className='order-btn' onClick={handlePlaceOrderClick}>Place Order</button>
     
    </main>
  )
}

export default Cart;