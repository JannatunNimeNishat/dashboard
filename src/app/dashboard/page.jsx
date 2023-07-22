"use client"
import NavBar from '@/component/NavBar/NavBar';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import plus from '../../../public/dashboard/side_nav_bar/plus.png'

import dashboardIcon from '../../../public/dashboard/side_nav_bar/darhboardIcon.png'
import up from '../../../public/dashboard/side_nav_bar/Expand_up.png'
import down from '../../../public/dashboard/side_nav_bar/Expand_down.png'

import setting_black from '../../../public/dashboard/side_nav_bar/setting_black.png'
import search from '../../../public/dashboard/side_nav_bar/u_search.png'

import cart from '../../../public/dashboard/content/chart.png'
import shop from '../../../public/dashboard/content/u_shop.png'
import user from '../../../public/dashboard/content/u_users-alt.png'
import threeBarAngle from '../../../public/dashboard/content/threeBarAngle.png'
import info_circle from '../../../public/dashboard/content/info-circle.png' 
const dashboardPage = () => {

    const [display, setDisplay] = useState(false)
    console.log(display);
    return (
        <div>
            <div className='h-[50px]  flex items-center'>
                <NavBar></NavBar>
            </div>
            <div className='grid grid-cols-7'>

                <div className='col-span-1 bg-[#262626] flex flex-col justify-center items-center  '>
                    {/* new Item */}
                    <br />
                    <button className=' px-5 py-2 bg-white text-black flex gap-1 rounded-md items-center justify-center'>
                        <Image src={plus} alt='plus' />
                        <p>New Item</p>
                    </button>

                    <div className='h-1 bg-black w-full my-5'>
                    </div>
                    {/* 1st */}
                    <div className='flex gap-3 w-full px-5  items-center justify-between cursor-pointer'
                        onClick={() => setDisplay(!display)}
                    >
                        <div className='flex gap-2'>
                            <Image src={dashboardIcon} alt='dashboardIcon'></Image>
                            <p>Dashboard</p>
                        </div>
                        <Image src={up} alt='up'></Image>
                    </div>
                    <div className={`text-left space-y-2 pt-2 ${display === false ? 'hidden' : 'block'}`}

                    >
                        <p>Commarce</p>
                        <p>Analytics</p>
                        <p>Crypto</p>
                        <p>Helpdesk</p>
                        <p>Monitoring</p>
                        <p>Fitnes</p>
                    </div>

                    <div className='h-1 bg-black w-full my-4'>
                    </div>
                    {/* 2nd */}
                    <div className='flex gap-3 pb-2 w-full px-5   items-center justify-between '>
                        <div className='flex gap-2'>
                            <Image src={dashboardIcon} alt='dashboardIcon'></Image>
                            <p>Application</p>
                        </div>
                        <Image src={down} alt='down'></Image>
                    </div>
                    <div className='h-1 bg-black w-full my-4'>
                    </div>
                    {/* 3rd */}
                    <div className='flex gap-3 pb-2 w-full px-5 items-center justify-between '>
                        <div className='flex gap-2'>
                            <Image src={dashboardIcon} alt='dashboardIcon'></Image>
                            <p>Elements</p>
                        </div>
                        <Image src={down} alt='down'></Image>
                    </div>

                    <div className='h-1 bg-black w-full my-4'>
                    </div>
                    {/* 4th */}
                    <div className='flex gap-3 pb-2 w-full px-5   items-center justify-between '>
                        <div className='flex gap-2'>
                            <Image src={dashboardIcon} alt='dashboardIcon'></Image>
                            <p>Forms</p>
                        </div>
                        <Image src={down} alt='down'></Image>
                    </div>
                    <div className='h-1 bg-black w-full my-4'>
                    </div>
                    {/* 5th */}
                    <div className='flex gap-3 pb-2 w-full px-5  items-center justify-between '>
                        <div className='flex gap-2'>
                            <Image src={dashboardIcon} alt='dashboardIcon'></Image>
                            <p>Plugins</p>
                        </div>
                        <Image src={down} alt='down'></Image>
                    </div>
                    <div className='h-1 bg-black w-full my-4'>
                    </div>
                    {/* 6th */}
                    <div className='flex gap-3 pb-2 w-full px-5  items-center justify-between '>
                        <div className='flex gap-2'>
                            <Image src={dashboardIcon} alt='dashboardIcon'></Image>
                            <p>Elements</p>
                        </div>
                        <Image src={down} alt='down'></Image>
                    </div>
                    <div className='h-1 bg-black w-full my-4'>
                    </div>
                    {/* 7th */}
                    <div className='flex gap-3 pb-2 w-full px-5  items-center justify-between '>
                        <div className='flex gap-2'>
                            <Image src={dashboardIcon} alt='dashboardIcon'></Image>
                            <p>Datagrid</p>
                        </div>
                        <Image src={down} alt='down'></Image>
                    </div>
                    <div className='h-1 bg-black w-full my-4'>
                    </div>
                    {/* 8th */}
                    <div className='flex gap-3 pb-2 w-full px-5  items-center justify-between '>
                        <div className='flex gap-2'>
                            <Image src={dashboardIcon} alt='dashboardIcon'></Image>
                            <p>Setting</p>
                        </div>
                        <Image src={down} alt='down'></Image>
                    </div>

                </div>

                {/* 2nd parent */}
                <div className='col-span-6 bg-white text-black'>

                    {/* add new post */}
                    <div className='px-3 py-2 flex items-center justify-between w-full'>
                        <div className='flex gap-4 '>
                            <p className='text-xl font-bold'>Add new post</p>
                            <div className='flex gap-1 items-center'>
                                <Image src={plus} alt='plus'></Image>
                                <p>Add Content</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <Image src={setting_black} alt='setting_black'></Image>
                                <p>Add Content</p>
                            </div>
                        </div>
                        <div className=' px-5 h-[44px] border rounded-md flex items-center justify-between'>
                            <input type="text" name="" id="" placeholder='Search content...' />
                            <Image src={search} alt='search'></Image>
                        </div>
                    </div>
                    {/* main container */}
                    <div className='py-4 px-5 bg-[#f5f5f5] text-black'>
                        {/* statics */}
                        <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                            <div className='bg-white flex items-center gap-3 py-3 px-5 rounded-lg'>
                                <Image src={cart} alt='cart'></Image>
                                <div>
                                    <small>Total Sales</small>
                                    <p className='text-xl font-bold'>$2,456</p>
                                </div>
                            </div>
                            <div className='bg-white flex items-center gap-3 py-3 px-5 rounded-lg'>
                                <Image src={shop} alt='shop'></Image>
                                <div>
                                    <small>Total Expenses</small>
                                    <p className='text-xl font-bold'>$3,326</p>
                                </div>
                            </div>
                            <div className='bg-white flex items-center gap-3 py-3 px-5 rounded-lg'>
                                <Image src={user} alt='user'></Image>
                                <div>
                                    <small>Total Visitors</small>
                                    <p className='text-xl font-bold'>$3,326</p>
                                </div>
                            </div>
                            <div className='bg-white flex items-center gap-3 py-3 px-5 rounded-lg'>
                                <Image src={threeBarAngle} alt='threeBarAngle'></Image>
                                <div>
                                    <small>Total Orders</small>
                                    <p className='text-xl font-bold'>$1,326</p>
                                </div>
                            </div>
                        </div>

                        {/* form */}
                        <div className='bg-white rounded-lg mt-5 py-5 px-5'>

                            <h3 className='font-bold text-xl'>From title</h3>
                            <p>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>
                            
                            <div className='border w-full py-4 border-red-400 bg-red-50 flex items-center gap-2 px-3 rounded-lg mt-5'>
                                <Image src={info_circle} alt='info_circle'></Image>
                                <p className='text-red-900 font-bold'>Senectus malesuada suspendisse bibendum elit amet vitae.</p>
                            </div>


                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default dashboardPage;