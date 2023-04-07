import React, {memo, useEffect, useState} from 'react'
import TopicHeader from './components/TopicHeader'
import { useFetch } from './Hooks/Hooks'
import { RotatingLines } from 'react-loader-spinner'

import NewsCard from './components/NewsCard';

const News = () => {
 
  const {data, isLoading} = useFetch({url: 'https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&media=True'})


  
console.log("DASdasd",data)
 
  return (
    <div className='covid-news wrap mx-5'>
        <TopicHeader title='Covid-19 News'/>
        <div className={`flex flex-row flex-wrap gap-y-5 ${isLoading && 'justify-center'}`}>
          {
            isLoading ? <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          /> :
            data !== undefined ? data.map((data, index) => (
              index <4 && (
             <NewsCard key={index} data = {data} />
             ))) : <h2 className='text-5xl w-full text-center my-5 font-bold text-regal-blue'>This section is free api only</h2>
          }
         
        </div>
    </div>
  )
}

export default memo(News)