import React from 'react'

import Item from '../components/Item'
import {items} from '../resources/data'
import {BsFillBagFill} from 'react-icons/bs'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'

const Home = () => {
 
  return (
    <main className='home'>
    <div className="home-heading">
      SamanBazaar.
    </div>
   
    <div style={{position:'relative',top:'-16rem'}} >
      Redefining the way you shop!!
    </div>
      {/* <img  className="home-img" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="samanbazaar-img"></img> */}

    <div style={{position:'relative',top:'-17rem'}}>
      <Link  className='product-link' to="/products">Explore our Products</Link>
    </div>
    </main>
  )
}

export default Home