import React from 'react'
import Plan from './Components/Plan'

import ImagePlan from '../../images/plan/img4.jpg'

const GutHealth = () => {
  return (
    <>
        <Plan 
            src={ImagePlan} 
            title='Sign up for the Gut Check Challenge' 
            paragraph='Learn to listen to your gut through 10 days of small changes that can have a big impact on your digestion.'
        />
    </>
  )
}

export default GutHealth