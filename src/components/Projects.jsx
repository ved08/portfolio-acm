import React from 'react'
import p1 from "../assets/buyinablink.jpg"
export default function Projects() {
  return (
    <div className='Projects mt-8' id='Projects'>
        <p className='text-4xl text-center font-bold mb-8'>Recent Projects</p>
        <div className='Project-list place-items-center grid grid-cols-3'>
            <Project />
            <Project />
            <Project />
        </div>
    </div>
  )
}
const Project = () => (
    <div className='Project w-[300px] h-[400px] bg-[#E66615] rounded'>
        <img  src={p1} alt='' width={150} style={{borderRadius: "30px"}}/>
        <p className='text-center'>
            Buy in a Blink is an E-commerce platform on solana blockchain.<br /> This project has recieved a grant of $1000 from <a href='https://earn.superteam.fun/' className='text-cyan-700'>superteam</a>.
        </p>
        <a href='https://buyinablink.xyz' className='text-center text-cyan-700'>Link here</a>
    </div>
)
