"use client";
import React, { useState } from "react";
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from "./MenuOverlay";

const NavLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    },
]

const NavBar = () => {
  const [navbarOpen, setNavBarOpen] = useState(false);  
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95 font-sans'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-5 py-3'>
            <Link href={"/"} className="text-3xl md:text-5xl text-white font-semibold">
                LOGO
            </Link>
            <div className=' mobile-menu block md:hidden'>
            {
                !navbarOpen ? (
                    <button onClick={() => setNavBarOpen(true)} className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'>
                        <Bars3Icon className='h-5 w-5' />
                    </button>
                    ) : (
                    <button onClick={() => setNavBarOpen(false)} className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'>
                        <XMarkIcon className='h-5 w-5' />
                    </button>     
                    )
            }
            </div>
            <div className='menu hidden md:block md:w-auto' id="navbar">
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                {
                    NavLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={NavLinks} /> : null}
    </nav>
  )
}

export default NavBar
