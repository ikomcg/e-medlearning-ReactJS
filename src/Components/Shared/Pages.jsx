import React from 'react'
import PagesHeader from './Components/PagesHeader'

const Pages = ({title,content}) => {
  return (
    <section className='page-topic my-10'>
            <div className="wrap py-5 px-3">
                <PagesHeader title={title}/>
                <div className='flex flex-row flex-wrap gap-y-5'> 
                    {content.map((items, index) => (
                        <div key={index} className='flex flex-row flex-nowrap items-start cursor-pointer hover:scale-101 w-1/2 p-2'>
                            <img src={items.src} alt=""  style={{maxWidth: '120px', width: '100%', height:'120px'}}/>
                            <div className='px-2'>
                                <h4 className='text-2xl text-black font-semibold'>{items.topic}</h4>
                                <p className='text-xl text-black font-normal'>{items.summary}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
  )
}

export default Pages