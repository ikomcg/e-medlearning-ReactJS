import React from 'react'
import LivingHealthy from './Home/Living_Healthy';
import Main from './Home/Main'
import News from './Home/News';
import Newsletter from './Home/Newsletter';

const Home = () => {
  return (
    <>
      <Main/>
      <section >
        <LivingHealthy/>
      </section>
      <section className='my-10'>
          <News/>
      </section>
      <section>
          <Newsletter/>
      </section>
    </>
  )
}

export default Home