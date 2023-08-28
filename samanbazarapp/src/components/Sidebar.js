import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillCloseSquare,AiFillHome,AiOutlineShoppingCart,AiFillInfoCircle} from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'
import { useGlobalContext } from '../context'

const Sidebar = () => {
  const {showSidebar} = useGlobalContext();
  return (
    <aside className={ showSidebar?`sidebar show-sidebar`:`sidebar`}>
      
        <div className="home-container" >
<Link  to="/" className='sidebar-link'><AiFillHome></AiFillHome>Home</Link>
        </div>
         
          <Link  to="/about"className='sidebar-link'><AiFillInfoCircle></AiFillInfoCircle>About</Link>
          <Link  to="/cart" style={{borderBottom:'0'}}className='sidebar-link'><BsFillCartFill></BsFillCartFill>Cart</Link>
    </aside>
  )
}

export default Sidebar