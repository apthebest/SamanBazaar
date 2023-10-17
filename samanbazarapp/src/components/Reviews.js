import React from 'react'
import {AiOutlineStar} from 'react-icons/ai'
const Reviews = ({username,reviewTitle,description,rating}) => {
  
    return (
   <section className="review-section">
    <h3 className='review-header'>{rating}<span  style={{position:'relative',top:'0.2rem'}}><AiOutlineStar/></span>  {reviewTitle}</h3>
    <p>{description}<span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio autem aut aspernatur reiciendis nobis saepe. Ducimus nemo, incidunt saepe doloremque, sequi obcaecati enim totam quidem itaque, et ullam atque aspernatur.</span></p>
    <h4>{username}</h4>
   </section>
  )
}

export default Reviews