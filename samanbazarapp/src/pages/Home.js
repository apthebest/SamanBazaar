import React from 'react'
import { Link } from 'react-router-dom'
import {items} from '../resources/data'
import{useNavigate} from 'react-router-dom'
import {AiFillRightCircle,AiFillLeftCircle,} from 'react-icons/ai'
const Home = () => {
  const [pictureIndex,setPictureIndex] = React.useState(0);
  const navigate = useNavigate();
  const size = items.length/2;
 
  
 const redirectToProduct = ()=>{
  navigate("/products")
 }
  return (
    <main className='home'>
      
      <h2>We're SAMANBAZAAR</h2>
      <h3>Your One Stop Solution for almost "EvErYtHiNg".</h3>
      <section className="home-img-container">
      <span className="img-manip" onClick={()=>{setPictureIndex((size+pictureIndex-1)%size)}}>
        <AiFillLeftCircle></AiFillLeftCircle>
      </span>
      <img className='home-img' src={items[pictureIndex].img} onClick ={redirectToProduct} alt="" />
     <span className="img-manip" onClick={()=>setPictureIndex((pictureIndex+1)%size)}>
        <AiFillRightCircle></AiFillRightCircle>
      </span>
      </section>
      <span className='home-txt'>
       <Link to="/products" style={{textDecoration:'none',color:'inherit'}}>We Deal in Electronics, Lifestyle, Sports and many more..</Link>
      </span>
    </main>
  )
}

export default Home