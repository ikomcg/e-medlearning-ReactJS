import React from 'react'
import '../../Style/Pages/style.css'


const Pages = ({bg, title, paragraph}) => {
  return (
    <>
        <main className={bg}>
            <div className="wrap flex justify-center items-center h-webkit-fill-available">
                <div className='text-center w-2/5'>
                    <h1 className='text-5xl text-white font-bold'>{title}</h1>
                    <p className='text-2xl text-white font-normal'>{paragraph}</p>
                </div>
            </div>
        </main>
    </>
  )
}

export default Pages