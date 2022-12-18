import React from 'react'
import Subscribes from '../../../Components/Forms/Subscribes'

const Plan = ({src , title, paragraph}) => {
  return (
    <section>
        <div className="wrap flex items-center justify-center ">
            <div className='my-10 px-3 text-center flex flex-col items-center '>
                <img src={src} alt="" className='w-1/2' />
                <h1 className='text-4xl text-black font-bold my-5' >{title}</h1>
                <p className='text-xl text-black font-normal'>{paragraph}</p>
                <div className='my-7 w-1/2'>
                    <Subscribes/>
                    <span className='text-lg text-regal-blue font-normal leading-3'> Your privacy is important to us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Plan