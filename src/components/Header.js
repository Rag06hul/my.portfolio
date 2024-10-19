import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header(){
    const [toggleMenu,settoggleMenu]=useState(false)
    return <header className="flex justify-between px-5 py-2 bg-white sticky top-0"> 
        <a className="font-bold text-black" href="#">PORTFOLIO</a>
        <nav className="hidden md:block ">
        <ul className="flex text-black">
            <li> <a href="/">Home</a></li>
            <li> <a href="#about">About</a></li>
            <li> <a href="#projects">Projects</a></li>
            <li> <a href="#skills">Skills</a></li>
            <li> <a href="#resume">Resume</a></li>
            <li> <a href="#contact">Contact</a></li>
        </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden">
        <ul  onClick={() =>settoggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav ">
            <li> <a href="#">Home</a></li>
            <li> <a href="#about">About</a></li>
            <li> <a href="#projects">Projects</a></li>
            <li> <a href="#skills">Skills</a></li>
            <li> <a href="#resume">Resume</a></li>
            <li> <a href="#contact">Contact</a></li>
        </ul>
        </nav>}
        <button onClick={() => settoggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-black h-5'/></button>
    </header>
    
}