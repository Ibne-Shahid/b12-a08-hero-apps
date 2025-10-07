import React from 'react'
import NavImg from '../assets/logo.png'
import { NavLink } from 'react-router'
import { AiFillGithub } from 'react-icons/ai';

const Nav = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink to="/" className={({ isActive }) => isActive ? "bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text border-b-2 border-violet-600" : ''}><span>Home</span></NavLink>
                        <NavLink to="/apps" className={({ isActive }) => isActive ? "bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text border-b-2 border-violet-600" : ''}><span>Apps</span></NavLink>
                        <NavLink to="/installedApps" className={({ isActive }) => isActive ? "bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text border-b-2 border-violet-600" : ''}><span>Installation</span></NavLink>
                    </ul>
                </div>
                <NavLink to="/"><a className="btn btn-ghost text-lg font-bold bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text"> <img className='h-10 w-10' src={NavImg} alt="" /> HERO.IO</a></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-8">
                    <NavLink to="/" className={({ isActive }) => isActive ? "bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text border-b-2 border-violet-600" : ''}><li>Home</li></NavLink>
                    <NavLink to="/apps" className={({ isActive }) => isActive ? "bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text border-b-2 border-violet-600" : ''}><li>Apps</li></NavLink>
                    <NavLink to="/installedApps" className={({ isActive }) => isActive ? "bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text border-b-2 border-violet-600" : ''}><li>Installation</li></NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://github.com/Ibne-Shahid' target='_blank' className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white"><AiFillGithub /> Contribute</a>
            </div>
        </div>
    )
}

export default Nav