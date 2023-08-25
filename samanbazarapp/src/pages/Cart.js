import React from 'react'
import { useGlobalContext } from '../context';
import CartItem from '../components/CartItem';
import {BsEmojiSmileUpsideDownFill} from 'react-icons/bs'

const Cart = () => {
  const {clearCart} = useGlobalContext();
  const {cartItems,setCartItems,modal,setModal} = useGlobalContext();
    const total = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price* currentItem.amount;
}, 0);
  const handlePlaceOrderClick = () => {
    setCartItems([]);
    setModal('Order placed successfully');
  }
  //setting the modal message as null 15 seconds after the order is placed
  React.useEffect(()=>{
    setTimeout(() => {
      setModal('');
    }, 2000);
  },[modal])

  if(cartItems.length === 0)
  return (
    
  <div className="empty-cart">
    
   <div className="order-success">{modal}</div>
    {modal ===''? <>
    <div className="emoji-container"><BsEmojiSmileUpsideDownFill></BsEmojiSmileUpsideDownFill></div>
    <h3>Your Bag Seems To Be Empty.</h3></>:''}
    </div>);
  return (
  
    <main className="cart">
      <div className="cart-header">
        Your Bag
      </div>  
      {cartItems.map((item)=>{
        return <CartItem key ={item.id} {...item}></CartItem>
      })}
      <p style={{fontFamily:'arial',fontSize:'1.2rem',textAlign:'center',marginBottom:'1rem'}}>You need to pay: <b>{total}$</b></p>
      <button className='order-btn' onClick={handlePlaceOrderClick}>Place Order</button>
     
    </main>
  )
}

export default Cart;