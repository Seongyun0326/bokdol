import React from 'react';
import Typed from 'react-typed';
// Step 1: Import your video
import BokdolVideo from '../assets/bokdol.MP4'; // Replace 'path-to-your-video.mp4' with the correct path

const Hero = () => {
  return (
    <div className='text-white relative'>
      {/* Video as background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={BokdolVideo} type="video/mp4" />
      </video>

      {/* Content */}
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center relative z-10'>
        <p className='font-bold p-2 '>
          Unleash the future of Meme Coin.
        </p>
        <h1 className='text-[#5A3D33] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Join the pack. Unleash the profits.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='text-[#A67C52] md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible Token for
          </p>
          <Typed
            className='text-[#008080] md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Community', 'Meme', 'Prosperity']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='text-[#FFFFFF]md:text-2xl text-xl font-bold text-gray-500'> Embrace the spirit of Bokdol and embark on a journey towards a new age of digital finance.</p>
      </div>
    </div>
  );
};

export default Hero;
