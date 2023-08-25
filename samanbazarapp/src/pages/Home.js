import React from 'react'

import Item from '../components/Item'
import {items} from '../resources/data'
import { useGlobalContext } from '../context'

const Home = () => {
 const {modal} = useGlobalContext();
  return (
    <>
    {modal &&
    <article className='modal-message'>{modal}</article>
    }
  <div className="items-container">
  
    {
      items.map((item)=>{
        const {id} = item;
        return <Item key={id} {...item}></Item>
      })
    }
  </div>
  </>
  )
}

export default Home