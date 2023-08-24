import React from 'react';
import Laptop from '../assets/laptop.jpg';
import Step1Icon from '../assets/step1.png';
import Step2Icon from '../assets/step2.png';
import Step3Icon from '../assets/step3.png';
import Step4Icon from '../assets/double.png';
import Step5Icon from '../assets/front.jpg';

const Tutorial = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-gray-50'>
            <div className='max-w-[1240px] mx-auto text-center mb-10'>
                <h1 className='text-4xl font-bold mb-4'>How to Buy Bokdol Coin</h1>
                <p>Follow these simple steps:</p>
            </div>

            <div className='grid md:grid-cols-3 gap-8 mb-10'>
                {[
                    { icon: Step1Icon, title: 'Step 1', description: 'Download and set up a compatible wallet, such as MetaMask or Trust Wallet.', link: 'https://metamask.io/download/' },
                    { icon: Step2Icon, title: 'Step 2', description: 'Purchase Ethereum (ETH) on a cryptocurrency exchange and transfer it to your wallet.' },
                    { icon: Step3Icon, title: 'Step 3', description: 'Visit a decentralized exchange like Uniswap and connect your wallet.', link: 'https://app.uniswap.org/#/swap' },
                ].map((step, index) => (
                    <div key={index} className='w-full shadow-xl flex flex-col p-4 bg-white my-4 rounded-lg hover:scale-105 duration-300'>
                        <img className='w-20 mx-auto mt-[-3rem]' src={step.icon} alt={step.title} />
                        <h2 className='text-2xl font-bold text-center py-8'>{step.title}</h2>
                        <p className='text-lg text-center leading-relaxed py-4 px-4'>{step.description}</p>
                        {step.link && (
                            <a href={step.link} target="_blank" rel="noopener noreferrer" className='mt-4 px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded transition duration-300'>
                                Go to Link
                            </a>
                        )}
                    </div>
                ))}
            </div>

            <div className='flex justify-center gap-8 mb-10'>
                {[
                    {
                        icon: Step4Icon,
                        title: 'Step 4',
                        description: 'Select Bokdol Coin as the desired token and enter the amount you\'d like to buy.',
                        address: '0xa60013Fd62Bd994F278fB0FeA291BB120afA42cC'
                    },
                    {
                        icon: Step5Icon,
                        title: 'Step 5',
                        description: 'Review the transaction details, confirm the swap, and enjoy your Bokdol Coin!'
                    }
                ].map((step, index) => (
                    <div key={index} className='w-1/3 shadow-xl flex flex-col p-4 bg-white my-4 rounded-lg hover:scale-105 duration-300'>
                        <img className='w-20 mx-auto mt-[-3rem]' src={step.icon} alt={step.title} />
                        <h2 className='text-2xl font-bold text-center py-8'>{step.title}</h2>
                        <p className='text-lg text-center leading-relaxed py-4 px-4'>
                            {step.description}
                            {step.address && (
                                <span className='block text-sm text-gray-500 mt-2'>{step.address}</span>
                            )}
                        </p>
                    </div>
                ))}
            </div>

            <div className='max-w-[1240px] mx-auto text-center mt-10'>
                <p className='text-red-600'>*Please note that trading fees and slippage may apply during the purchase process.</p>
            </div>
        </div>
    );
};

export default Tutorial;