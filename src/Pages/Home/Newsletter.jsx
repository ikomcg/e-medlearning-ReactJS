import React from 'react'
import Subcription from '../../images/section-subcription/subscribe-img.jpg'
const Newsletter = () => {
  return (
        <div className='wrap'>
            <img src={Subcription} alt="" />
            <div>
                <h3>The health and wellness newsletter you’ve been looking for</h3>
                <p>Interested in exclusive interviews, must-have products, and staying updated with trending news? Wellness Wire has it all, and you don’t want to miss out.</p>
                <div>
                  <input type="text" />
                  
                </div>
            </div>
        </div>
  )
}

export default Newsletter