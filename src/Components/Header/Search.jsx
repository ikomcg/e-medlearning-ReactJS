import React from 'react';
import {BsSearch} from 'react-icons/bs';

const Search = () => {

  return (
    
    <div className='search flex justify-between items-center gap-2'>
      <input type="text" placeholder='Search' />
      <BsSearch className='text-3xl text-white font-bold'/>
    </div>
  )
}

export default Search