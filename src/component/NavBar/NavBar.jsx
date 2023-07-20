"use client"
import React from 'react';
import home from '../../../public/dashboard/navbar/home.png'
import threeBar from '../../../public/dashboard/navbar/threeBar.png'
import threeBarAngle from '../../../public/dashboard/navbar/threeBarAngle.png'
import setting from '../../../public/dashboard/navbar/setting.png'
import user from '../../../public/dashboard/navbar/user.png'
import Image from 'next/image';
import Link from 'next/link';
const NavBar = () => {

    const navLinks = <div className='flex w-full  justify-between'>
        <li className=''>
            <Link href={'/'} className='flex items-center gap-2  pr-2 w-[200px] p-4'>
                <Image src={home} alt='home'></Image>
                <p>Home</p>
            </Link>
        </li>
        <li>
            <Link href={'/'} className='flex items-center gap-2 ml-3'>
                <Image src={threeBar} alt='threeBar'></Image>
                <p>Contact</p>
            </Link>
        </li>
        <li>
            <Link href={'/'} className='flex items-center gap-2 ml-3'>
                <Image src={threeBarAngle} alt='threeBarAngle'></Image>
                <p>Category</p>
            </Link>
        </li>
        <li>
            <Link href={'/'} className='flex items-center gap-2 ml-3'>
                <Image src={setting} alt='setting'></Image>
                <p>Setting</p>
            </Link>
        </li>
    </div>

    return (

        <div className='flex justify-between px-5 w-full '>
            <div className='w-[500px]'>
                <ul className='  w-full '>
                    {navLinks}
                </ul>

            </div>
           
        <div className='h-[36px] bg-white text-black  py-2 flex items-center gap-2'>
           <Image src={user} alt='user'></Image>
           <span className=''>İsmail İhsan Bülbül</span>
           </div>
        </div>
    );
};

export default NavBar;