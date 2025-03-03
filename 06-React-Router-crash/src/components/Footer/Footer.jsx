import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className='main w-full h-fit p-2 flex justify-around text-white bg-slate-800'>
                <img className='w-[100px] h-[100px]' src="./public/illuminati_logo.jpg" alt="" />

                <div className="container  flex  justify-around w-1/3 ">
                    <ul className='first flex flex-col justify-around'>
                        <li className='p-2 rounded-2xl hover:scale-110 hover:text-orange-400'>RESOURCES</li>
                        <li className='p-2 rounded-2xl hover:scale-110 hover:text-orange-400'>
                           <NavLink to='/'
                            className={({isActive})=>`${isActive?'text-orange-400':''}`}
                           >Home</NavLink> </li>
                            <li className='p-2 rounded-2xl hover:scale-110 hover:text-orange-400'>About</li>
                    </ul>
                    <ul className="second flex flex-col justify-around">
                        <li className='p-2 rounded-2xl hover:scale-110 hover:text-orange-400'>FOLLOW_US</li>
                        <li className='p-2 rounded-2xl hover:scale-110 hover:text-orange-400'>Github</li>
                        <li className='p-2 rounded-2xl hover:scale-110 hover:text-orange-400'>Discord</li>
                    </ul>
                    <ul className="third flex flex-col justify-around">
                        <li className='p-2 rounded-2xl hover:scale-110 hover:text-orange-400'>LEGAL</li>
                        <li className='p-2 rounded-2xl hover:scale-110 hover:text-orange-400'>Privacy Policy</li>
                        <li className='p-2 rounded-2xl hover:scale-110 hover:text-orange-400'>Terms & Conditions</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Footer
