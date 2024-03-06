import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-2'>
        <div className='texts mt-44 px-20'>
            {
                ['WE CREATE', 'EYE-OPENING', 'PRESENTATIONS'].map((item,index)=>{
                    return <div className='masker' key={index}>
                        <div className='flex items-center'>
                            {
                                index==1 && (<div className='bg-green-700 h-[4.2rem] w-[6vw] mt-4 rounded-xl'></div>)
                            }
                            <h1 className='text-8xl font-semibold tracking-tighter leading-[5.5vw] '>{item}</h1>
                        </div>
                    </div>   
                })
            }
        </div>
        <div className='border-t border-zinc-700 mt-32 flex justify-between items-center py-3 px-20'>
            {
                ['For public and private companies', 'From the first pitch to IPO'].map((item,index)=>(
                    <p key={index} className='font-light '>{item}</p>
                ))
            }
            <div className='flex justify-between gap-1'>
                <div className='border-2 border-zinc-500 rounded-full px-7 py-2'>START THE PROJECT</div>
                <div className='flex items-center justify-center w-10 h-10 border-2 border-zinc-500 rounded-full '>
                    <span className='rotate-45'>
                        <FaArrowUpLong/>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage