import React from 'react'
import Plan from './Components/Plan'

import ImagePlan from '../../images/plan/img1.png'

const MindfulEating = () => {
  return (
    <>
        <Plan 
            src={ImagePlan} 
            title='Join the Mindful Eating Challenge' 
            paragraph='Improve your eating habits without changing what you eat. Sign up to get 19 daily tips sent to your in-box.'
        />
    </>
  )
}

export default MindfulEating