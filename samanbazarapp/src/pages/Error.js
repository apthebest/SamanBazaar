import React from 'react'
import {Link} from 'react-router-dom'
const Error = () => {
  return (
   <section className="error-page">
    <div>
      Oops!!!, Seems like you entered into loophole.
    </div>
     <div>
      <Link to="/" className='error-home-link'>Back To Home</Link>
     </div>
   </section>
  )
}

export default Error