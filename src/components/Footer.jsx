import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <>
      <div className='flex flex-col grid sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <p className="text-2xl font-light tracking-widest mb-5 text-gray-900">FALCON</p>
          <p className='w-full md:w-2/3 text-gray-600 leading-relaxed'>
            Premium interior design services creating thoughtfully designed spaces that reflect elegance, functionality, and timeless beauty. Transform your vision into reality with expert design consultation.
          </p>
        </div>

        <div>
          <p className="text-lg mb-5 font-light tracking-wide text-gray-900">LINKS</p>
          <ul className='flex flex-col gap-3 text-gray-600'>
            <li><a href="/" className="hover:text-gray-900 transition">Home</a></li>
            <li><a href="/collection" className="hover:text-gray-900 transition">Projects</a></li>
            <li><a href="/about" className="hover:text-gray-900 transition">About</a></li>
            <li><a href="/contact" className="hover:text-gray-900 transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="text-lg mb-5 font-light tracking-wide text-gray-900">CONNECT</p>
          <ul className='flex flex-col gap-3 text-gray-600'>
            <li><a href="tel:+919888919994" className="hover:text-gray-900 transition">+91 98889 19994</a></li>
            <li><a href="https://wa.me/+919888919994" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition">WhatsApp</a></li>
            <li className="text-sm">Maharashtra, India</li>
          </ul>
        </div>

      </div>

      <div>
        <hr className="border-gray-300" />
        <p className='w-full py-5 text-center text-sm text-gray-600'>&copy; 2024 Interior Design Studio. All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer
