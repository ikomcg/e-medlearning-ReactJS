import React from 'react'
import PagesHeader from './PagesHeader'
import RightFeatures from './Features/RightFeatures'

const Features = ({featuresLeft, featuresRight}) => {
  return (
        <section className='page-features my-10'>
            <div className="wrap py-5 px-3">
                <PagesHeader title='Features'/>
                <div className='flex flex-row flex-nowrap'>
                    <div className='w-1/2'>
                        {featuresLeft.map((items, index) => (
                            <div key={index} className='flex flex-col flex-nowrap cursor-pointer hover:scale-101'>
                                <img src={items.src} alt=""  style={{height:'500px'}}/>
                                <div>
                                    <h4 className='text-3xl text-black font-semibold my-2'>{items.topic}</h4>
                                    <p className='text-xl text-black font-normal'>{items.summary}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col w-1/2 justify-between px-3' style={{height:'500px'}}>
                        <RightFeatures featuresRight={featuresRight} />
                    </div>
                </div>
            </div>
        </section>
  )
}

export default React.memo(Features)