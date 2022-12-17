import React, {memo} from 'react'
import TopicHeader from './components/TopicHeader'
import { useFetch } from './Hooks/Hooks'

import NewsCard from './components/NewsCard';

const News = () => {
  const {data} = useFetch({url: 'https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&media=True'})

  return (
    <div className='covid-news wrap mx-5'>
        <TopicHeader title='Covid-19 News'/>
        <div className='flex flex-row flex-wrap gap-y-5'>
          {data !== undefined ? data.map((data, index) => (
             index <4 && (
            <NewsCard data = {data} index={index}/>
            ))) : <div>this section is free api only</div>}
        </div>
    </div>
  )
}

export default memo(News)