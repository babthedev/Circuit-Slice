import { useState } from 'react'
import ImageSlider from './ImageSlide'
import Twitter from './Twitter'
import circuit from '/src/assets/circuitslice.png'


function App() {

  return (
    <div className='h-screen w-screen px-8 text-content bg-bg'>
      <div className='h-3/4 mt-8 flex gap-8'>
        <ImageSlider/>
        <div>
          <div className="flex  mt-4 justify-between">
          <a href="https://babthedev.substack.com/" target='_blank'><img src={circuit} width='80px' className='rounded-3xl' alt="Circuit Slice Logo" /></a>
          <button className='border-2 border-content p-2 px-3 text-xl float-right rounded-lg lg:mr-7 hover:bg-gray-100 dark:hover:text-bg dark:hover:border-'> <a href="https://babthedev.substack.com/archive" target='_blank'>Check out the Archive</a></button>
          </div>
          <p className='mt-28 text-2xl'>The <span className='font-bold text-4xl'>Circuit Slice</span> newsletter</p>
          <p className='mt-4 text-lg'>Every week we bring you updates about tech throughout the week.</p>
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
