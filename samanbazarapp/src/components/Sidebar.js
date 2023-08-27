import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillCloseSquare} from 'react-icons/ai'
import { useGlobalContext } from '../context'
const Sidebar = () => {
  const {showSidebar} = useGlobalContext();
  return (
    <aside className={ showSidebar?`sidebar show-sidebar`:`sidebar`}>
      
        <div className="home-container" >
<Link  to="/" className='sidebar-link'>Home</Link>
        </div>
         
          <Link  to="/about"className='sidebar-link'>About</Link>
          <Link  to="/cart"className='sidebar-link'>Cart</Link>
    </aside>
  )
}

export default Sidebar