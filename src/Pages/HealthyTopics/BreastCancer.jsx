import React from 'react'
import Main from '../../Components/Shared/Main'
import Pages from '../../Components/Shared/Pages'
import Features from '../../Components/Shared/Components/Features'
import bg from '../../Style/backgroundImage.module.css'

import Image1 from '../../images/breast-cancer/img1.jpg'
import Image2 from '../../images/breast-cancer/img2.jfif'
import Image3 from '../../images/breast-cancer/img3.jpg'
import Image4 from '../../images/breast-cancer/img4.jfif'

import UnderstandingImg1 from '../../images/breast-cancer/ubc/img1.jfif'
import UnderstandingImg2 from '../../images/breast-cancer/ubc/img2.jfif'
import UnderstandingImg3 from '../../images/breast-cancer/ubc/img3.jfif'
import UnderstandingImg4 from '../../images/breast-cancer/ubc/img4.webp'
import UnderstandingImg5 from '../../images/breast-cancer/ubc/img5.jfif' 
import UnderstandingImg6 from '../../images/breast-cancer/ubc/img6.jfif'




const featuresLeft = [
  {src: Image1, topic: 'Why Racial Diversity Matters in Breast Cancer Clinical Trials' , summary: ' Black women are underrepresented in breast cancer clinical trials, even though they have higher rates of mortality compared to white women. Learn why.'}
]
const featureRight = [
  {src: Image2, topic: 'FDA Approves First Targeted Therapy for HER2-Low Breast Cancer  ' , summary: 'Federal regulators have approved the use of the drug Enhertu to treat a newly'},
  {src: Image3, topic: 'What to Know About Comedocarcinoma' , summary: 'Comedocarcinoma is a noninvasive or early form of breast cancer. Learn about'},
  {src: Image4, topic: 'Can Flaxseed Help Prevent Breast Cancer?' , summary: 'Studies have evaluated the relationship between flaxseed and breast cancer.'},
]

const understanding = [
  {src: UnderstandingImg1 , topic: 'Breast Pain After COVID-19 Vaccine: What to Know', summary: 'The COVID-19 vaccine triggers a response in your immune system that may cause side effect'},
  {src: UnderstandingImg2 , topic: 'Are Transgender Women At Risk for Breast Cancer?', summary: 'Researchers found that transgender women who receive hormone therapy have an increased risk of breast cancer when compared with cisgender men. '},
  {src: UnderstandingImg3 , topic: 'Breast Cancer in Men: Know the Signs', summary: 'It’s rare, but men can and do get breast cancer. Men’s breasts don’t fully develop like women’s do, but all men have breast tissue.'},
  {src: UnderstandingImg4 , topic: 'You Need To Know About the Risk of Leukemia Following Breast Cancer Treatment', summary: 'The last thing anyone wants to hear after their breast cancer has gone into remission is that they need another'},
  {src: UnderstandingImg5 , topic: 'What Are the Early Signs and Symptoms of Breast Cancer?', summary: 'Breast cancer generally shows no symptoms in the early stage, timely detection can turn a story of breast cancer into a survivor’s tale'},
  {src: UnderstandingImg6 , topic: 'What Does a Breast Cancer Lump Feel Like? Learn the Symptoms', summary: 'Breast cancer lumps don’t all feel the same. Your doctor should examine any lump, whether or not it meets the most common symptoms'}
]


const BreastCancer = () => {
  return (
      <>
        <Main bg={bg.Breast_Cancer}  title='Breast Cancer' paragraph='Supporting your health & wellbeing at every stage of your breast cancer journey.'/>
        <Features featuresLeft={featuresLeft} featuresRight={featureRight}/>
        <Pages title='UNDERSTANDING' content={understanding}/>
        <Pages title='TREATMENT' content={understanding}/>
        <Pages title='SELF-CARE' content={understanding}/>

      </>
  )
}

export default BreastCancer