import React from 'react'

const RightFeatures = ({featuresRight}) => {
  return (
    featuresRight.map((items, index)=> (
        <div key={index} className='flex flex-row justify-between gap-5 cursor-pointer hover:scale-101'>
            <img src={items.src} alt="" style={{height: '150px',
    maxWidth: '200px'}}/>
            <div>
              <h4 className='text-3xl text-black font-semibold my-2'>{items.topic}</h4>
              <p className='text-xl text-black font-normal'>{items.summary}</p>
            </div>
        </div>
    ))
    
  )
}

export default React.memo(RightFeatures)