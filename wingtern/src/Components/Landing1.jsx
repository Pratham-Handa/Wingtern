import React from 'react';
import mr from '../assets/MR1.png'

const Landing1 = () => {
  return (
    <div className='bg-stone-950 text-gray-50 h-screen w-screen overflow-hidden flex items-center justify-center'>
        <div className='w-10/12'>
            <div className='flex justify-center items-center flex-col'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-center text-[55px] font-semibold'>
                        New to college?
                    </h1>
                    <h2 className='text-[45px] mb-3 text-center leading-none w-9/12'>
                        Your Partner helps discover skills,dodge scams & score gigs
                    </h2>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <h3 className='text-[20px] text-gray-300'>
                        Flow into growth with Wingtern
                    </h3>
                    <button className='border-2 font-bold border-yellow-300 w-fit py-3 px-8 text-yellow-300'>Learn More</button>
                </div>
            </div>
            <div className='bg-slate-300 '>
                <img src={mr} alt="Graff" className='w-40'/>
            </div>
        </div>
    </div>
  )
}

export default Landing1