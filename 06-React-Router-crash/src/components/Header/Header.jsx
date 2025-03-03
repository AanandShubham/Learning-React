import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='w-full flex justify-between  items-center pl-4 pr-4 h-fit bg-slate-800'>
            <div>
                <img className='w-[90px] h-[90px] p-2.5 rounded-2xl  hover:mix-blend-normal mix-blend-color-dodge hover:scale-110 ' src="./public/Eye_logo.jpg" alt="" />
            </div>
            <div className=''>
                <ul className='w-fit h-fit flex justify-around gap-5 text-white hover:cursor-pointer'>
                    <li className='p-2 rounded-2xl hover:scale-110 hover:text-orange-400'>
                        <NavLink to="/"
                        className={({isActive})=>`${isActive?'text-orange-300':''}`}
                        >Home</NavLink></li>
                    <li className='p-2 rounded-2xl hover:scale-110 hover:text-orange-400'>
                        <NavLink to="/about"
                        className={({isActive})=>`${isActive?'text-orange-300':''}`}
                        >About</NavLink>
                        </li>
                    <li className='p-2 rounded-2xl hover:scale-110 hover:text-orange-400'>Contact</li>
                    <li className='p-2 rounded-2xl hover:scale-110 hover:text-orange-400'>Github</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
