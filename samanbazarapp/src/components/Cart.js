import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from '../context'
const Cart = () => {
  const {cartItems} = useGlobalContext();
  return (
    <main className="cart">
      {cartItems.map((item)=>{
        return <CartItem {...item}></CartItem>
      })}
    </main>
  )
}

export default Cart