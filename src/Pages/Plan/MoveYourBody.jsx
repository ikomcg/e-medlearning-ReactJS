import React from 'react'
import Plan from './Components/Plan'

import ImagePlan from '../../images/plan/img3.jpg'

const MoveYourBody = () => {
  return (
    <>
        <Plan 
            src={ImagePlan} 
            title='Join the Move Your Body Challenge' 
            paragraph='Challenge yourself with one simple exercise a day to build your own personal movement routine.'
        />
    </>
  )
}

export default MoveYourBody