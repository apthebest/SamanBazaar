import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillCloseSquare,AiFillHome,AiOutlineShoppingCart,AiFillInfoCircle} from 'react-icons/ai'
import {BsFillCartFill,BsFillBagFill} from 'react-icons/bs'
import { useGlobalContext } from '../context'

const Sidebar = () => {
  const {showSidebar,toggleSidebar} = useGlobalContext();
  return (
    <aside onClick={toggleSidebar}  className={ showSidebar?`sidebar show-sidebar`:`sidebar`}>
      
        <div className="home-container" >
        <Link  to="/" className='sidebar-link'><AiFillHome></AiFillHome> Home</Link>
        </div>
          <Link  to="/products" className='sidebar-link'><BsFillBagFill/> Products</Link>
          <Link  to="/about"className='sidebar-link'><AiFillInfoCircle></AiFillInfoCircle> About</Link>
          <Link  to="/cart" style={{borderBottom:'0'}}className='sidebar-link'><BsFillCartFill></BsFillCartFill> Cart</Link>
    </aside>
  )
}

export default Sidebar