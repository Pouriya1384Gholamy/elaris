import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { items, products } from '../js/slider.js';

function MenueSlider() {
  // coffee به صورت پیش‌فرض انتخاب شده
  const [selectedItem, setSelectedItem] = useState(1);
  const navigate = useNavigate();

  return (
    <div className='bg-[#000000] min-h-screen'>
      
      {/* هدر */}
      <div className='p-4'>
        <h1 className='text-center mb-8 text-2xl text-[#FF002B]'>COFFEE SHOP</h1>
        
        {/* اسلایدر اول - افقی */}
        <div className="w-full">
          <div className="flex gap-3 overflow-x-auto px-3 pb-3 scrollbar-hide">
            {items.map(item => (
      <button
        key={item.id}
        onClick={() => setSelectedItem(item.id)}
        className={`
          px-6 py-2.5 rounded-full whitespace-nowrap
          text-[18px] font-medium
          transition-all duration-300 ease-out
          border bg-[#990e12] text-black
          
          ${
            selectedItem === item.id
              ? `
                bg-[#ee1010]
                border-[#b23a48]
                shadow-md shadow-[#b23a48]/55
                scale-105
                transition-all duration-1000 delay-100 
              `
              : `
                text-[#a70b0b]
                border-[#2a2a2a]
                hover:scale-105
              `
          }
        `}
      >
        {item.title}
      </button>
            ))}
          </div>
        </div>
      </div>

      {/* اسلایدر دوم - عمودی */}
      <div className='bg-[#000000]'>
        <div className='p-4 space-y-4'>
          {products.filter(product => product.category === selectedItem).length > 0 ? (
            products
              .filter(product => product.category === selectedItem)
              .map(product => (
                <div 
                  key={product.id} 
                  className='bg-gradient-to-bl from-[#8B1216] to-[#2A0204] text-[#000000] p-5 rounded-[25px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#8B1216]/50'
                >
                  <div className='flex justify-between items-center'>
                    <img 
                      className='w-[92.75px] h-[76px] object-cover rounded-lg' 
                      src={product.img} 
                      alt={product.name} 
                    />
                    <div className='flex justify-center flex-col items-center mr-5 gap-2'>
                      <h3 className='text-xl font-bold mb-1 text-[#000000]'>{product.name}</h3>
                      <p className='text-[#000000]/80 text-xl'>{product.price} تومان</p>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <div className='text-center py-10'>
              <p className='text-[#b87333] text-xl'>محصولی در این دسته وجود ندارد</p>
            </div>
          )}
        </div>
      </div>

      {/* فضای خالی پایین برای اطمینان از پس زمینه کامل */}
      <div className='bg-[#000000] h-20'></div>
    </div>
  );
}

export default MenueSlider;