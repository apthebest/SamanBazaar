import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'
import {Link,useNavigate} from 'react-router-dom'
const Item = ({id,title,price,img}) => {
  const {setShowSidebar,showSidebar} = useGlobalContext();
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    if(showSidebar){
      setShowSidebar(false);
    }
    navigate(`/item/${id}`);
  }  
  return (
   <section className = "main-item" onClick={handleNavigate}>
         <img className='item-img' src={img} alt="item-img" />
    <div className="item-container">
        <p style={{color:'black'}}>{title}</p>
        <p>Price: ₹{price}</p>
      
    </div>
   </section>
  )
}

export default Item