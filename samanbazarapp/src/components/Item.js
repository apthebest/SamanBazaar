import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'
import {Link} from 'react-router-dom'
const Item = ({id,title,price,img}) => {
  const {cartItems,setCartItems,setModal,modal} = useGlobalContext();
  let addToCart = () =>{
    // if our cart has zero items
    if(cartItems.length === 0){
      setCartItems([{id,title,price,img,amount:1}]);
    }
    //if our cart has non-zero items
    else{
     // Filter out items with a different ID
let otherItems = cartItems.filter((cartItem) => cartItem.id !== id);

// Find the item with the same ID
let repeatedItem = cartItems.find((cartItem) => cartItem.id === id);

if (!repeatedItem) {
  // If the item doesn't exist in the cart, add it with an amount of 1
  setCartItems((prevItems) => [...prevItems, { id, img, title, price, amount: 1 }]);
} else {
  // If the item already exists, increase its amount by 1
  repeatedItem.amount += 1;
  setCartItems([...otherItems, repeatedItem]);
}
    }
    setModal('Item Added To your Bag')
    
  }
   
    useEffect(()=>{
      setTimeout(function(){
        setModal('');
      },3000)
    },[cartItems])
    
  return (
   <section className = "main-item">
         <img className='item-img' src={img} alt="item-img" />
    <div className="item-container">
        <Link className='item-link' to={`/item/${id}`}>{title}</Link>
        <p>Price:{price}$</p>
        <button className='add-btn' onClick={addToCart} >Add To Cart</button>
    </div>
   </section>
  )
}

export default Item