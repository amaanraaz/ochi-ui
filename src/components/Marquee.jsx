import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-10 bg-[#004D43] rounded-t-2xl'>
        <div className='border-y border-zinc-400 flex whitespace-nowrap -tracking-[0.8rem] gap-10 overflow-hidden'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 5}} className='text-[15vw] font-bold'>WE ARE OCHI</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 5}} className='text-[15vw] font-bold'>WE ARE OCHI</motion.h1>
        </div>
    </div>
  )
}

export default Marquee