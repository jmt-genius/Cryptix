import React from 'react'
import Input from './Input'
import Image from 'next/image'

const NavBar = () => {
  return (
    <div className='flex justify-between px-8 w-[100vw]'>
        <div>
            <Image src="/logo_cryptix.png" alt='logo' width={150} height={150}/>
        </div>
        <ul className='flex gap-4 items-center justify-end'>
            <li>Home</li>
            <li>Launch ICO</li>
            <li>Portfolio</li>
            <li>About Us</li>
            <li><Input type="text" placeholder="Search ICO" /></li>
        </ul>
    </div>
  )
}

export default NavBar