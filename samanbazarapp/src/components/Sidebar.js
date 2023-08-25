import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillCloseSquare} from 'react-icons/ai'

const Sidebar = () => {
  return (
    <aside className='sidebar show-sidebar'>
        <nav style={{alignSelf:'flex-end'}}>
      <AiFillCloseSquare></AiFillCloseSquare>
        </nav>
         <Link className='link' to="/">Home</Link>        
          <Link className='link' to="/about">About</Link>
          <Link className='link'  to="/cart">Cart</Link>
    </aside>
  )
}

export default Sidebar