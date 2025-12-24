import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import Contact from './pages/Contact'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppContact from './components/WhatsAppContact'
import ImagePreviewModal from './components/ImagePreviewModal'
import { ImagePreviewProvider } from './contexts/ImagePreviewContext'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <ImagePreviewProvider>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/collection' element={<Collection />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
        <WhatsAppContact />
        <ImagePreviewModal />
      </div>
    </ImagePreviewProvider>
  )
}

export default App
