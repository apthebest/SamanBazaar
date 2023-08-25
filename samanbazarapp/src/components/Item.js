import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'
import {Link} from 'react-router-dom'
const Item = ({id,title,price,img}) => {
  const {cartItems,setCartItems,setModal,modal} = useGlobalContext();
  let addToCart = () =>{
    // if our cart has zero items
    if(cartItems.length === 0){
      setCartItems([{id,title,price,img,amount:1}]);
      return;
    }
    //if our cart has non-zero items
    else{
      let otherItems = cartItems.filter((cartItem)=>cartItem.id !==id);
      let repeatedItem = cartItems.filter((cartItem)=>cartItem.id ===id);
      if(repeatedItem.length === 0){
        setCartItems((prevItem)=>{
          return [...prevItem,{id,img,title,price,amount:1}];
        })
      }
      else{
        let itemRepeated = repeatedItem[0];
        itemRepeated.amount+=1;
        const newItems = [...otherItems,itemRepeated];
        setCartItems(newItems);
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