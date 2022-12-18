import React from 'react'
import Plan from './Components/Plan'

import ImagePlan from '../../images/plan/img5.jpg'

const MoodFoods = () => {
  return (
    <>
        <Plan 
            src={ImagePlan} 
            title='Sign up for the Mood Foods Challenge' 
            paragraph='Learn how foods affect your mood through expert guidance and recipe ideas in our 12-day challenge.'
        />
    </>
  )
}

export default MoodFoods