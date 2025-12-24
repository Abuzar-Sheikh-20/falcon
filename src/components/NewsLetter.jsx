import React from 'react'

const NewsLetter = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className='text-center py-12'>
      <p className='text-3xl font-light text-gray-900 mb-2'>Let's Create Something Beautiful</p>
      <p className='text-gray-500 mt-2 mb-8'>Get in touch for a personalized consultation on your interior design project</p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 border border-gray-300 pl-4 flex mx-auto my-6 items-center bg-white hover:border-gray-400 transition'>
        <input className='w-full sm:flex-1 outline-none py-4 text-sm' type="email" placeholder='salman....@email.com' required />
        <button className='py-4 px-10 bg-gray-900 text-white text-xs font-light tracking-wider hover:bg-gray-800 transition'>CONNECT</button>
      </form>
    </div>
  )
}

export default NewsLetter
