import React from 'react'
import Plan from './Components/Plan'

import ImagePlan from '../../images/plan/img2.jpg'

const SugarSavy = () => {
  return (
        <Plan 
            src={ImagePlan} 
            title='Sign up for the Sugar Savvy Challenge' 
            paragraph='Build healthy habits through 12 days of expert-approved info, practical tips, and recipes.'
        />
  )
}

export default SugarSavy