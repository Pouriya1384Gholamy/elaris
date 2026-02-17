import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import elaris from '../Img/Elariss.png'


function MenueHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  return (
    <div className=''>
          <div className='flex justify-between mx-6 py-5 items-center'>
            <img className='w-[110px]' src={elaris} alt="elaris.png" />
            {searchOpen ? (
              <div className='relative'>
                <input 
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder='search...'
                  className='absolute top-[27px] left-[-168px] bg-[#F1D696] border-2 border-[#F1D696] rounded-[7px] focus:outline-none'
                />
                <button 
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchText("");
                  }}
                  className='text-[#FF002B] text-xl'
                >
                  <RxCross2 />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setSearchOpen(true)}
                className='text-2xl text-[#FF002B] p-1'
              >
                <CiSearch />
              </button>
            )}
          </div>
      </div>
  )
}

export default MenueHeader