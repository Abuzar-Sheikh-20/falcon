import React from 'react'
import {assets} from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-4 items-center py-20 text-sm md:text-base text-gray-700'>

      <div className='text-center'>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5 opacity-70' alt="" />
        <p className='font-semibold text-gray-900'>Custom Design Solutions</p>
        <p className='text-gray-500 text-sm'>Personalized interiors tailored to your space</p>
      </div>

      <div className='text-center'>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5 opacity-70' alt="" />
        <p className='font-semibold text-gray-900'>Premium Materials</p>
        <p className='text-gray-500 text-sm'>Curated finest materials and finishes</p>
      </div>

      <div className='text-center'>
        <img src={assets.support_img} className='w-12 m-auto mb-5 opacity-70' alt="" />
        <p className='font-semibold text-gray-900'>Expert Consultation</p>
        <p className='text-gray-500 text-sm'>Personalized support from design experts</p>
      </div>
      
    </div>
  )
}

export default OurPolicy