import React from 'react'
import { useParams } from 'react-router-dom'
import {items} from '../resources/data.js'
import { useGlobalContext } from '../context.js'
import { useEffect } from 'react'
const SingleItem = () => {
  const {cartItems,setCartItems,setModal,modal} = useGlobalContext();
  const [showContent,setShowContent] = React.useState(false);
     const {id} = useParams();
    let ourId = parseInt(id);

    let myItem = items.filter((item)=>{
   if(item.id === ourId)
   return item;
   });

   const addToCart = () =>{
 
     if(cartItems.length === 0){
      setCartItems([{id:ourId,title,price,img,amount:1}]);
    
    }
    //if our cart has non-zero items
    else{
     // Filter out items with a different ID
let otherItems = cartItems.filter((cartItem) => cartItem.id !== ourId);

// Find the item with the same ID
let repeatedItem = cartItems.find((cartItem) => cartItem.id === ourId);

if (!repeatedItem) {
  // If the item doesn't exist in the cart, add it with an amount of 1
  setCartItems((prevItems) => [...prevItems, { id:ourId, img, title, price, amount: 1 }]);
} else {
  // If the item already exists, increase its amount by 1
  repeatedItem.amount += 1;
  setCartItems([...otherItems, repeatedItem]);
}

    }
    setModal('Item Added To your Bag');
    }
     useEffect(()=>{
      setTimeout(()=>{
        setModal('');
      },2000)
    },[modal])
 const {img,title,description,price} = myItem[0];
  return (
    <>
     {modal &&
    <article className='modal-message'>{modal}</article>
    }
    <div className='single-item-container'>
         <img className='singleItemImage' src={img} alt="" />
       <section style={{marginLeft:'2rem'}} className='single-item-desc'>
        <h3>Item: {title}</h3>
       
        <h3>Price: {price} $</h3>
         <p><b>Description: </b> 
         {description}
         
         {showContent||<a  style={{color:'blue',textDecoration:'underline',paddingLeft:'0.2rem'}}  onClick={()=>setShowContent(true)}>show More</a>}
         {showContent && ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero excepturi eum sunt qui ipsa laboriosam optio amet ut voluptates esse, nihil ad accusamus natus distinctio molestias aperiam temporibus nulla. Id recusandae asperiores vitae aspernatur delectus odit exercitationem officiis eius pariatur error, consequatur eos fuga necessitatibus iusto voluptatem maiores corporis fugit?'}
         {showContent && <a style={{color:'blue',textDecoration:'underline',paddingLeft:'0.2rem'}} onClick={()=>setShowContent(false)}>Show Less</a>}
         </p>
          <button className='single-add-btn' onClick={addToCart}>Add To Cart</button>
         </section>
      
        </div>
       
        </>
  )
}

export default SingleItem