import React from 'react'

import Item from '../components/Item'
import {categories} from '../resources/data'
import { useGlobalContext } from '../context'

const Home = () => {
 const {modal,products,showItemByCategory} = useGlobalContext();
  return (
    <>
    {modal &&
    <article className='modal-message'>{modal}</article>
    }
    <nav className="product-navbar">
      <ul className="product-links">
        <button className='category-link' onClick={()=>showItemByCategory('All')}>All</button>
       {
        categories.map((category,index)=>{
          return <button key={index} onClick={()=>showItemByCategory(category)} className='category-link'>{category}</button>
        })
       }
      </ul>
    </nav>
  <div className="items-container">
  
    {
      products.map((item)=>{
        const {id} = item;
        return <Item key={id} {...item}></Item>
      })
    }
  </div>
  </>
  )
}

export default Home