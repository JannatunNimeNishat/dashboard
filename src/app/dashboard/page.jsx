"use client"
import NavBar from '@/component/NavBar/NavBar';
import Link from 'next/link';
import React from 'react';
import plus from '../../../public/dashboard/side_nav_bar/plus.png'
import dashboardIcon from '../../../public/dashboard/side_nav_bar/darhboardIcon.png'
import up from '../../../public/dashboard/side_nav_bar/Expand_up.png'

import Image from 'next/image';
const dashboardPage = () => {

    return (
        <div>
            <div className='h-[50px]  flex items-center'>
                <NavBar></NavBar>
            </div>
            <div className='grid grid-cols-7'>
                <div className='col-span-1 bg-[#262626] flex flex-col justify-center items-center '>
                    {/* new Item */}
                    <br />
                    <button className=' px-5 py-2 bg-white text-black flex gap-1 rounded-md items-center justify-center'>
                        <Image src={plus} alt='plus' />
                        <p>New Item</p>
                    </button>

                    <div className='h-1 bg-black w-full my-5'>
                    </div>
                    {/* <hr className='my-5 bg-black text-black'/> */}

                    <div className='flex gap-3  items-center justify-between '>
                        <div className='flex gap-2'>
                            <Image src={dashboardIcon} alt='dashboardIcon'></Image>
                            <p>Dashboard</p>
                        </div>
                        <Image src={up} alt='up'></Image>
                    </div>
                    <div className='text-left space-y-2 pt-2'>
                        <p>Commarce</p>
                        <p>Analytics</p>
                        <p>Crypto</p>
                        <p>Helpdesk</p>
                        <p>Monitoring</p>
                        <p>Fitnes</p>
                    </div>


                </div>
                <div className='col-span-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam voluptatibus obcaecati voluptatem, iure porro iste illum incidunt magni at, inventore, quaerat perspiciatis. Animi delectus nisi repellat dolorem necessitatibus optio.
                </div>
            </div>
        </div>
    );
};

export default dashboardPage;