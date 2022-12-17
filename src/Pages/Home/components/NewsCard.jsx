import React from 'react'


import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const NewsCard = ({data, index}) => {
  return (
    <a key={index} href={data.link} className='w-1/2 px-3' rel="noreferrer" target="_blank">
        <div className='flex flex-row flex-nowrap'>
        <LazyLoadImage
            effect="blur"
            src={data.media} 
        />
        <div className='px-3 '>
            <h5 className='text-2xl text-black font-bold'>{data.title}</h5>
            <p >{data.summary}</p>
        </div>
        </div>
    </a>  
  )
}

export default React.memo(NewsCard)