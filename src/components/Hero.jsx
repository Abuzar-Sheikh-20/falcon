import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-300'>

      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 bg-white'>
        <div className='text-gray-800 px-8'>
          <div className='flex items-center gap-2'>
            <p className='w-5 h-[2px] md:w-11 bg-gray-800'></p>
            <p className='font-light text-sm sm:text-base tracking-wide'>Interior Designer</p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed font-light'>Salman Khan</h1>
          <div className='flex items-center gap-2'>
            <p className='font-light text-sm sm:text-base tracking-wide'>EXPLORE PROJECTS</p>
            <p className='w-8 h-[1px] md:w-11 bg-gray-800'></p>
          </div>
        </div>
      </div>
      <img className='sm:w-1/2 w-full object-cover' src={assets.hero_img} alt="" />
    </div>
  )
}

export default Hero
