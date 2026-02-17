import React, { useState } from 'react';
import { AiFillHome } from "react-icons/ai";
import { PiShoppingCartFill } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { FaCreditCard } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx"; // آیکون بستن
import { useNavigate, useLocation } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [cartOpen, setCartOpen] = useState(false);
  
  // بررسی صفحه فعلی برای هایلایت
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* پنل سبد خرید */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          cartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setCartOpen(false)}
      ></div>
      
      <div 
        className={`fixed top-0 left-0 h-full w-1/2 bg-white z-50 shadow-2xl transition-transform duration-300 transform ${
          cartOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* هدر پنل */}
        <div className='flex justify-between items-center p-4 border-b'>
          <h2 className='text-xl font-bold text-[#5E4330]'>سبد خرید</h2>
          <button 
            onClick={() => setCartOpen(false)}
            className='text-2xl text-gray-600 hover:text-[#5E4330]'
          >
            <RxCross2 />
          </button>
        </div>
        
        {/* محتوای سبد خرید */}
        <div className='p-4'>
          <p>محصولات سبد خرید شما اینجا نمایش داده می‌شوند...</p>
          {/* می‌توانید کامپوننت Cart را اینجا قرار دهید */}
        </div>
      </div>

      {/* Footer اصلی */}
      <div className='fixed bg-[#000000] w-full bottom-0 h-[70px] border-t-2 border-t-[#5E4330] shadow-lg z-40'>
        <div className='flex justify-around items-center h-full px-2'>
          
          {/* آیکون Home */}
          <button 
            onClick={() => navigate('/')}
            className={`flex justify-center items-center flex-col transition-all duration-200 ${isActive('/') ? 'text-[#800E13] scale-110' : 'text-[#800E13]/70 hover:text-[#800E13]'}`}
          >
            <AiFillHome className='text-2xl mb-1' />
            <span className='text-xs font-medium'>Home</span>
          </button>
          
          {/* آیکون Menu */}
          <button 
            onClick={() => navigate('/Menue')}
            className={`flex justify-center items-center flex-col transition-all duration-200 ${isActive('/Menue') ? 'text-[#800E13] scale-110' : 'text-[#800E13]/70 hover:text-[#800E13]'}`}
          >
            <TbListDetails className='text-2xl mb-1' />
            <span className='text-xs font-medium'>Menu</span>
          </button>
          
          {/* آیکون Profile */}
          <button 
            onClick={() => navigate('/profile')}
            className={`flex justify-center items-center flex-col transition-all duration-200 ${isActive('/profile') ? 'text-[#800E13] scale-110' : 'text-[#800E13]/70 hover:text-[#800E13]'}`}
          >
            <FaUserCircle className='text-2xl mb-1' />
            <span className='text-xs font-medium'>Profile</span>
          </button>
          
        </div>
      </div>
    </>
  );
}

export default Footer