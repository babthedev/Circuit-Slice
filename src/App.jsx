import { useState } from 'react'
import ImageSlider from './ImageSlide'
import Twitter from './Twitter'


function App() {

  return (
    <div className='h-screen w-screen px-8 text-content bg-bg'>
      <div className='h-3/4 mt-8 flex gap-8'>
        <ImageSlider/>
        <div>
          <button className='border-2 mt-4 border-content p-2 px-3 text-xl float-right rounded-lg lg:mr-7'> <a href="https://babthedev.substack.com/archive" target='_blank'>Check out the Archive</a></button>
          <p className='mt-28 text-2xl'>The <span className='font-bold text-4xl'>Circuit Slice</span> newsletter</p>
          <p className='mt-4'>Every week we bring you updates about tech throughout the week.</p>
          <p className='mt-4 text-lg lg:text-2xl'>Join other members of the <span className='font-bold text-2xl lg:text-4xl'>Circuit Network</span> reading this newsletter in their inbox.</p>
          <iframe
        title="My Substack"
        className='mt-8 mx-auto w-2/3 rounded-2xl'
        src="https://babthedev.substack.com/embed"
        width="280"
        height="150"
        style={{ border: '1px solid #EEE', background: 'white' }}
        frameBorder="0"
        scrolling="no"
        allow="autoplay; encrypted-media"
      ></iframe>
        <Twitter/>
        </div>
      </div>
    </div>
  )
}

export default App
