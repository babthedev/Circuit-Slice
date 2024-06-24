import { useState } from 'react'
import ImageSlider from './ImageSlide'
import Navbar from './Navbar'
import CustomSubstackEmbed from './SubstackFeed'
import microsoftLight from "./assets/microsoft_light.png"
import instaLight from "./assets/insta_light.png"
import appleLight from "./assets/apple_light.png"
import androidLight from "./assets/android_light.png"
import xLight from "./assets/x_light.png"
import searchLight from "./assets/search_light.png"


function App() {

  return (
    <div className='h-screen w-screen lg:px-24 px-8 text-content bg-bg'>
        <Navbar />
      <div className='h-3/4 flex gap-8 relative'>
        <ImageSlider />
        <div className='relative'>
          <p className='mt-28 font-bold lg:text-6xl text-4xl mb-10'>The <span className=''>Circuit Slice</span></p>
          <img src={microsoftLight} width={55} className='rotate-45 absolute lg:block hidden top-24 right-60' alt="" />
          <img src={instaLight} width={50} className='rotate-45 absolute lg:block hidden top-44 right-8' alt="" />
          <img src={appleLight} width={55} className='rotate-45 absolute lg:block hidden top-0 right-40' alt="" />
          <img src={androidLight} width={55} className='rotate-45 absolute lg:block hidden top-52 right-36' alt="" />
          <img src={searchLight} width={55} className='rotate-45 absolute lg:block hidden top-16 right-28' alt="" />
          <img src={xLight} width={55} className='rotate-45 absolute lg:block hidden top-8 right-6' alt="" />
          
          {/* <img src={microsoftLight} width={70} className='rotate-45' alt="" /> */}
          <p className='mt-4 text-2xl'>Every week we bring you updates about tech throughout the week.</p>
          <p className='mt-4 text-lg lg:text-4xl'>Join other members of the <span className='font-bold text-2xl lg:text-4xl mb-10'>Circuit Network</span> reading this newsletter in their inbox.</p>
          <CustomSubstackEmbed />
        </div>
        {/* Bottom Left */}
        <img src={microsoftLight} width={55} className='rotate-45 absolute lg:block hidden bottom-24 left-60' alt="" />
          <img src={instaLight} width={50} className='rotate-45 absolute lg:block hidden bottom-44 left-8' alt="" />
          <img src={appleLight} width={55} className='rotate-45 absolute lg:block hidden bottom-0 left-40' alt="" />
          <img src={androidLight} width={55} className='rotate-45 absolute lg:block hidden bottom-52 left-36' alt="" />
          <img src={searchLight} width={55} className='rotate-45 absolute lg:block hidden bottom-16 left-28' alt="" />
          <img src={xLight} width={55} className='rotate-45 absolute lg:block hidden bottom-8 left-6' alt="" />
      </div>
    </div>
  )
}

export default App
