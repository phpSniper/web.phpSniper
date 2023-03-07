import React from 'react'
import { navigations } from '../store';
import NavItem from './NavItem';
import Image from 'next/image';

const Navbar = () => {


  return (
    <div className='glass flex justify-between px-5 py-2 fixed w-full top-0 z-50'>
        
        <div className="md:max-w-5xl mx-auto flex w-full justify-between  space-x-20  items-center">
        <Image src="/phpSniper.png" priority width={100} height={100} className='w-16' alt='logo' />

<div className='hidden md:flex w-full justify-between text-gray-800 dark:text-gray-200'>

{
    navigations?.map((nav, index) => (
        <NavItem data={nav} key={index} />
    ))
}
</div>
        </div>

    </div>
  )
}

export default Navbar