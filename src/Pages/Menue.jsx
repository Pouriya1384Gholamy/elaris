import React from 'react'
import MenueHeader from '../Components/MenueHeader.jsx'
import MenueSlider from '../Components/MenueSlider.jsx'
import Footer from '../Components/Footer.jsx'

function Menue() {
  return (
    <div className='bg-[#000000] flex flex-col h-screen font-vazir'>
      <MenueHeader />
      <MenueSlider />
      <Footer />
    </div>
  )
}

export default Menue