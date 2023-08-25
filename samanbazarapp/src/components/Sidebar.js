import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillCloseSquare} from 'react-icons/ai'
import { useGlobalContext } from '../context'
const Sidebar = () => {
  const {showSidebar,closeSidebar} = useGlobalContext();
  return (
    <aside className={ showSidebar?`sidebar show-sidebar`:`sidebar`}>
      
        <div className="home-container" >
<Link  to="/" className='sidebar-link'>Home</Link>
<span onClick={closeSidebar} className='close-sidebar-btn'><AiFillCloseSquare></AiFillCloseSquare></span> 
        </div>
         
          <Link  to="/about"className='sidebar-link'>About</Link>
          <Link  to="/cart"className='sidebar-link'>Cart</Link>
    </aside>
  )
}

export default Sidebar