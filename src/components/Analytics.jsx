import React from 'react';
import Front from '../assets/front.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Front} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#5A3D33] font-bold '>🐾 About Bokdol Coin</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>BOKDOL (BKD)</h1>
          <p>
            Bokdol isn't just any dog; he's the inspiration behind a revolution. The Bokdol Coin is more than a meme coin; it's a symbol of community, fun, and prosperity. Embrace the spirit of Bokdol and embark on a journey towards a new age of digital finance.

          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
