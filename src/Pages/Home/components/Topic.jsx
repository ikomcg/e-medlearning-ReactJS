import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Topic = ({topic}) => {
  return (
   <>
   {topic.map((topic, index)=> {
        return (
                <div key={index} className='flex relative rounded-xl overflow-hidden cursor-pointer hover:scale-101'>
                    <LazyLoadImage effect="blur" src={topic.src} />
                    <div className='topic-info bottom-5 absolute p-3'>
                       <h3 className='text-2xl text-regal-blue font-bold'>{topic.title}</h3>
                    </div>
                </div>
        )
    })}
   </>
  )
}

export default React.memo(Topic)