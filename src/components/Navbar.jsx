import React from 'react'
import "./Global.css"
export default function Navbar() {
  return (
    <div className='Navbar-main rounded'>
       <div className='Navbar-container'>
        <p className='text-base hover:bg-[#e66613] hover:text-white w-min'><a href='https://x.com/ved08'>ved08</a></p>
       </div>
       <div className='Navbar-container Navbar-container-2'>
            <a href='#home'>Home</a>
            <a href='#Skills'>Skills</a>
            <a href='#Projects'>Projects</a>
            <a href='#Contact'>Contact Me</a>
            <button className='bg-[#e66613] text-white p-2 rounded'>Book a Call</button>
       </div>
    </div>
  )
}
