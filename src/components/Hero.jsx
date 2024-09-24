import React from 'react'
import ved from "../assets/ved2.jpeg"
export default function Hero() {
  return (
    <div className='Hero-main'>
        <div className='Hero-container'>
            <p className='text-5xl font-bold'>Heyo! This is < br/> Vedvardhan.</p>
            <p className='text-[#524f4f]'>I am a full stack web-developer and a blockchain developer <br /> and a chess enthusiast</p>
            <button className='bg-[#e66613] text-white p-2 rounded'>Hire Me</button>
        </div>
        <div className='Hero-container'>
            <img src={ved} alt='ved' className='w-80'/>
        </div>
    </div>
  )
}
