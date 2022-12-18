import React from 'react'

const PagesHeader = ({title}) => {
  return (
    <div className='flex flex-row justify-between border-b py-5 px-3 mb-10'>
        <h3 className='text-4xl text-regal-blue font-nomal' >{title}</h3>
    </div>
  )
}

export default PagesHeader