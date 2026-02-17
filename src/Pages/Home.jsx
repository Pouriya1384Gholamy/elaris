import React from 'react'
import { useNavigate } from 'react-router-dom'
import elaris from '../Img/Elariss.png'


function Home() {
    const navigate = useNavigate()

    const HandleGetstarted =() => {
        navigate("/Menue")
    }

    return (
        <div className='bg-[#000000] h-screen flex items-center flex-col font-vazir'>
            <div className="mt-[60px]">
                <img src={elaris} alt="Elariss" />
            </div>
            <div className='text-center text-[32px] mt-[20px] text-[#800E13]'>
                <p>به کافه الاریس خوش آمدید</p>
            </div>
            <div className='mt-[40px] flex items-center flex-col gap-4'>
                <button onClick={HandleGetstarted} className='w-[308px] h-[67px] bg-[#800E13] text-black px-8 py-3 rounded-full font-semibold transition duration-300'>
                    مشاهده منو
                </button>
                <button className='w-[308px] h-[67px] bg-transparent border-2 border-[#800E13] text-[#800E13] px-8 py-3 rounded-full font-semibold hover:bg-[#800E13] hover:text-white transition duration-300'>
                   آدرس و ساعت کاری
                </button>
            </div>
        </div>
    )
}

export default Home