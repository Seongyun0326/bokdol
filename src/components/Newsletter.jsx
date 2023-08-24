import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-12 bg-black text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-6'>

        {/* Title */}
        <div className='lg:col-span-3'>
          <h1 className='text-5xl font-bold py-2 text-[#00df9a] mb-6 border-b border-[#5A3D33]'>
            WHITEPAPER
          </h1>
        </div>

        {/* Content sections */}
        {[
          { title: '1. Introduction', content: 'Bokdol Coin, inspired by a small, tenacious Chihuahua, is more than just another cryptocurrency. It is the embodiment of resilience, community spirit, and forward-thinking financial systems.' },
          { title: '2. Problem Statement', content: 'The modern cryptocurrency landscape is flooded with tokens that lack purpose and clarity. Investors are seeking tokens with transparent goals, real-world applications, and a passionate community behind them.' },
          { title: '3. Solution & Product Overview', content: 'Bokdol Coin is not just another token. It is the future of meme coin investments, a coin that combines the virality of meme coins with the sustainability of utility tokens. Our platform aims to provide a decentralized space where meme enthusiasts, investors, and developers can come together, creating a robust ecosystem.' },
          { title: '4. Technology & Blockchain Details', content: 'Built on Ethereums ERC-20 protocol, Bokdol Coin leverages the security and flexibility of one of the worlds most established blockchain platforms. Our smart contract ensures transparent, secure, and rapid transactions.' },
          { title: '5. Tokenomics & Distribution', content: 'Total of 1 Billion tokens supplied. 40% Public sale, 30% Platform Development, 15% Team, 10% Community & Marketing, 5% Reserve.' },
          { title: '6. Roadmap', content: 'No set roadmap. No promises. Anything could happen.' },
        ].map((section, index) => (
          <div key={index} className='lg:col-span-3'>
            <h2 className='text-4xl py-1 border-l-4 border-[#A67C52] pl-4 my-4'>
              {section.title}
            </h2>
            <p className='text-lg leading-snug mb-6'>
              {section.content}
            </p>
          </div>
        ))}

        {/* Newsletter Signup */}
        <div className='lg:col-span-3 mt-10 py-4 px-6 rounded-lg bg-[#5A3D33] opacity-90'>
          <h2 className='text-4xl font-bold py-2 mb-4'>Stay Updated</h2>
          <p className='mb-4'>Sign up to our newsletter and be the first to know about the latest Bokdol Coin developments.</p>
          {/* Here you can add a sign-up form */}
        </div>

      </div>
    </div>
  );
};

export default Newsletter;
