"use client"

import { UserButton } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Header = () => {

    const path=usePathname();
    useEffect(()=>{
        console.log(path);
        
    })

  return (
    <div className='flex p-4 item-center justify-between bg-secondary shadow-md'>
        <Image src='/logo.svg' width={30} height={30} alt='logo'
        style={{ width: "auto", height: "auto" }}
         />
        <ul className='hidden md:flex gap-6'>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer 
            ${path==='/dashboard'&&'text-primary font-bold'}
                `}>Dashboard</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer 
            ${path==='/question'&&'text-primary font-bold'}
                `}>Question</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer 
            ${path==='/upgrade'&&'text-primary font-bold'}
                `}>Upgrade</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer 
            ${path==='/how_it_works'&&'text-primary font-bold'}
                `}>How it Works?</li>
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header