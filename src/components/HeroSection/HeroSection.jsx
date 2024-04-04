import React from 'react';
import image from '../../assets/hero/background.png'

const HeroSection = ({ title, subtitle }) => {
  return (
    <div className='w-screen h- mx-auto p-0'>
        <div className='max-h-[500px] relative'>
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl text-center sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-btn'>{title}</span></h1>
                <h1 className='px-4 text-2xl text-center sm:text-2xl md:text-4xl lg:text-4xl font-bold'>{subtitle}</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src={image} alt="/" />
        </div>
    </div>
  )
}

export default HeroSection