import React, { useState, useEffect } from 'react';
import cat from '/src/assets/catwithpizza.jpg'
import monkey from '/src/assets/monkeywithpizza.jpg'


const ImageSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [cat, monkey]; 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => clearInterval(intervalId);
  }, [imageIndex, images.length]);

  return (
    <div className='h-full w-1/3 bg-bg justify-center items-center md:flex hidden'>
      <img src={images[imageIndex]} className='rounded-2xl' alt={`Monkey Logo`} />
    </div>
  );
};

export default ImageSlider;
