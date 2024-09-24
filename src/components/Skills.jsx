import React from 'react'
import reactLogo from "../assets/react.svg"
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import solanaLogo from "../assets/solanaLogo.svg"
import { IoLogoFirebase } from "react-icons/io5";

export default function Skills() {
  return (
    <div className='Skills-main' id='Skills'>
        <p className='text-4xl text-center font-bold'>My Skills</p>
        <div className='Skills-container'>

        <div className='Skill-card'>
            <a href='https://reactjs.org'>
                <img className='rotate w-[100px]' src={reactLogo} alt="" />
            </a>
        </div>
        <div className='Skill-card '>
            <a href='https://nodejs.org/en'>
                <FaNode style={{fontSize: '120px', color: "#6CC24A"}}/>
            </a>
        </div>
        <div className='Skill-card w-20'>
            <a href='https://www.mongodb.com/'>

                <DiMongodb style={{fontSize: '100px', color: "#599537"}}/>
            </a>
        </div>
        <div className='Skill-card w-20'>
            <a href='https://firebase.google.com/'>
                <IoLogoFirebase style={{fontSize: '100px', color: "#FEA921"}}/>
            </a>
        </div>
        <div className='Skill-card'>
            <a href='https://solana.com/developers'>
            <img className='w-[220px]' src={solanaLogo} alt="" />
            </a>
        </div>
        </div>
    </div>
  )
}
