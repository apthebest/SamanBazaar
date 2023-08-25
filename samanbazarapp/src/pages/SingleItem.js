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
   const handleClick = () =>{
 
     if(cartItems.length === 0){
      setCartItems([{id:ourId,title,price,img,amount:1}]);
      return;
    }
    //if our cart has non-zero items
    else{
      
      let otherItems = cartItems.filter((cartItem)=>cartItem.id !== ourId);
      let repeatedItem = cartItems.filter((cartItem)=>cartItem.id === ourId);
      if(repeatedItem.length === 0){
        setCartItems((prevItem)=>{
          return [...prevItem,{id:ourId,img,title,price,amount:1}];
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
      <div>
         <img className='singleItemImage' src={img} alt="" />
          
      </div>
       
       <section style={{marginLeft:'2rem'}} className='single-item-desc'>
        <h3>Item: {title}</h3>
       
        <h3>Price: {price} $</h3>
         <p><b>Description: </b> 
         {description}
         
         {showContent||<a  style={{color:'blue',textDecoration:'underline',paddingLeft:'0.2rem'}}  onClick={()=>setShowContent(true)}>show More</a>}
         {showContent && ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero excepturi eum sunt qui ipsa laboriosam optio amet ut voluptates esse, nihil ad accusamus natus distinctio molestias aperiam temporibus nulla. Id recusandae asperiores vitae aspernatur delectus odit exercitationem officiis eius pariatur error, consequatur eos fuga necessitatibus iusto voluptatem maiores corporis fugit?'}
         {showContent && <a style={{color:'blue',textDecoration:'underline',paddingLeft:'0.2rem'}} onClick={()=>setShowContent(false)}>Show Less</a>}
         </p>
         </section>
      
        </div>
        <button className='single-add-btn' onClick={handleClick}>Add To Cart</button>
        </>
  )
}

export default SingleItem