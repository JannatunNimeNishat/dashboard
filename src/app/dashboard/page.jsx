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
import save from '../../../public/dashboard/content/u_save.png'
import left_arrow from '../../../public/dashboard/content/left_arrow.png'
import right_arrow from '../../../public/dashboard/content/right_arrow.png'
import flagEngland from '../../../public/dashboard/content/FlagEngland.png'
import flagTurkey from '../../../public/dashboard/content/FlagTurkie.png'


const dashboardPage = () => {

    const [display, setDisplay] = useState(true)
    console.log(display);
    return (
        <div>
            <div className='h-[50px]  flex items-center'>
                <NavBar></NavBar>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-7'>

                <div className=' lg:col-span-1  bg-[#262626] flex flex-col justify-center items-center sticky '>
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
                <div className='lg:col-span-6 bg-white text-black pt-3 lg:pt-0'>

                    {/* add new post */}
                    <div className='px-3 py-2 lg:flex items-center justify-between w-full'>
                        <div className='lg:flex gap-4 '>
                            <p className='text-xl font-bold '>Add new post</p>
                            <div className='flex gap-1 items-center'>
                                <Image src={plus} alt='plus'></Image>
                                <p>Add Content</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <Image src={setting_black} alt='setting_black'></Image>
                                <p>Add Content</p>
                            </div>
                        </div>
                        <div className=' px-5 h-[44px] border rounded-md flex items-center justify-between mt-3 lg:mt-0'>
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

                        {/* 1st form */}
                        <div className='bg-white rounded-lg mt-5 py-5 px-5'>

                            <h3 className='font-bold text-xl'>From title</h3>
                            <p>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>

                            <div className='border w-full py-4 border-red-400 bg-red-50 flex items-center gap-2 px-3 rounded-lg mt-5'>
                                <Image src={info_circle} alt='info_circle'></Image>
                                <p className='text-red-900 font-bold'>Senectus malesuada suspendisse bibendum elit amet vitae.</p>
                            </div>

                            {/* table */}
                            <>
                                <div className="overflow-x-auto mt-8 rounded-lg border">
                                    <table className="table table-zebra table-xs lg:table-lg">
                                        {/* head */}
                                        <thead>
                                            <tr className='bg-[#D4D4D4]'>
                                                <th>Table Title</th>
                                                <th>Table Title</th>
                                                <th>Table Title</th>
                                                <th>Table Title</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* row 1 */}
                                            <tr>
                                                <td>Etiam purus in</td>
                                                <td>Curabitur donec duis</td>
                                                <td>Morbi pharetra, accumsan</td>
                                                <td className='flex gap-3'>
                                                    <button className='px-3 py-1 bg-blue-700 flex items-center justify-center text-white rounded-md gap-1'>
                                                        <Image src={save} alt='save'></Image>
                                                        <p>Edit</p>
                                                    </button>
                                                    <button className='px-3 py-1 bg-amber-600 flex items-center justify-center text-white rounded-md gap-1'>
                                                        <Image src={save} alt='save'></Image>
                                                        <p>Delete</p>
                                                    </button>
                                                </td>
                                            </tr>
                                            {/* row 2 */}
                                            <tr>

                                                <td>Duis eget habitant</td>
                                                <td>At amet odio</td>
                                                <td>Commodo eget scelerisque</td>
                                                <td className='flex gap-3'>
                                                    <button className='px-3 py-1 bg-blue-700 flex items-center justify-center text-white rounded-md gap-1'>
                                                        <Image src={save} alt='save'></Image>
                                                        <p>Edit</p>
                                                    </button>
                                                    <button className='px-3 py-1 bg-amber-600 flex items-center justify-center text-white rounded-md gap-1'>
                                                        <Image src={save} alt='save'></Image>
                                                        <p>Delete</p>
                                                    </button>
                                                </td>
                                            </tr>
                                            {/* row 3 */}
                                            <tr>

                                                <td>Aliquam velit lacus</td>
                                                <td>Pellentesque egestas placerat</td>
                                                <td>Tortor habitant sit</td>
                                                <td className='flex gap-3'>
                                                    <button className='px-3 py-1 bg-blue-700 flex items-center justify-center text-white rounded-md gap-1'>
                                                        <Image src={save} alt='save'></Image>
                                                        <p>Edit</p>
                                                    </button>
                                                    <button className='px-3 py-1 bg-amber-600 flex items-center justify-center text-white rounded-md gap-1'>
                                                        <Image src={save} alt='save'></Image>
                                                        <p>Delete</p>
                                                    </button>
                                                </td>

                                            </tr>
                                            {/* row 4 */}
                                            <tr>
                                                <td>Fermentum scelerisque ultricies</td>
                                                <td>Morbi sagittis nulla</td>
                                                <td>Quam semper quis</td>
                                                <td className='flex gap-3'>
                                                    <button className='px-3 py-1 bg-blue-700 flex items-center justify-center text-white rounded-md gap-1'>
                                                        <Image src={save} alt='save'></Image>
                                                        <p>Edit</p>
                                                    </button>
                                                    <button className='px-3 py-1 bg-amber-600 flex items-center justify-center text-white rounded-md gap-1'>
                                                        <Image src={save} alt='save'></Image>
                                                        <p>Delete</p>
                                                    </button>
                                                </td>
                                            </tr>
                                            {/* row 5 */}
                                            <tr>
                                                <td>Integer semper pellentesque</td>
                                                <td>Neque turpis enim</td>
                                                <td>Egestas non sociis</td>
                                                <td className='flex gap-3'>
                                                    <button className='px-3 py-1 bg-blue-700 flex items-center justify-center text-white rounded-md gap-1'>
                                                        <Image src={save} alt='save'></Image>
                                                        <p>Edit</p>
                                                    </button>
                                                    <button className='px-3 py-1 bg-amber-600 flex items-center justify-center text-white rounded-md gap-1'>
                                                        <Image src={save} alt='save'></Image>
                                                        <p>Delete</p>
                                                    </button>
                                                </td>
                                            </tr>
                                            {/* row 6 */}
                                            <tr>
                                                <td>Parturient at id</td>
                                                <td>Sem neque, mattis</td>
                                                <td>Pellentesque facilisis massa</td>
                                                <td className='flex gap-3'>
                                                    <button className='px-3 py-1 bg-blue-700 flex items-center justify-center text-white rounded-md gap-1'>
                                                        <Image src={save} alt='save'></Image>
                                                        <p>Edit</p>
                                                    </button>
                                                    <button className='px-3 py-1 bg-amber-600 flex items-center justify-center text-white rounded-md gap-1'>
                                                        <Image src={save} alt='save'></Image>
                                                        <p>Delete</p>
                                                    </button>
                                                </td>
                                            </tr>
                                            {/* row 7 */}
                                            <tr>
                                                <td>Amet, pretium eget</td>
                                                <td>In ipsum volutpat</td>
                                                <td>Ut feugiat egestas</td>
                                                <td className='flex gap-3'>
                                                    <button className='px-3 py-1 bg-blue-700 flex items-center justify-center text-white rounded-md gap-1'>
                                                        <Image src={save} alt='save'></Image>
                                                        <p>Edit</p>
                                                    </button>
                                                    <button className='px-3 py-1 bg-amber-600 flex items-center justify-center text-white rounded-md gap-1'>
                                                        <Image src={save} alt='save'></Image>
                                                        <p>Delete</p>
                                                    </button>
                                                </td>
                                            </tr>
                                            {/* row 8 */}
                                            <tr>
                                                <td>Risus consequat sollicitudin</td>
                                                <td>Adipiscing odio nulla</td>
                                                <td>Pharetra id sit</td>
                                                <td className='flex gap-3'>
                                                    <button className='px-3 py-1 bg-blue-700 flex items-center justify-center text-white rounded-md gap-1'>
                                                        <Image src={save} alt='save'></Image>
                                                        <p>Edit</p>
                                                    </button>
                                                    <button className='px-3 py-1 bg-amber-600 flex items-center justify-center text-white rounded-md gap-1'>
                                                        <Image src={save} alt='save'></Image>
                                                        <p>Delete</p>
                                                    </button>
                                                </td>
                                            </tr>
                                            {/* row 9 */}
                                            <tr>
                                                <td>Risus consequat sollicitudin</td>
                                                <td>Adipiscing odio nulla</td>
                                                <td>Pharetra id sit</td>
                                                <td className='flex gap-3'>
                                                    <button className='px-3 py-1 bg-blue-700 flex items-center justify-center text-white rounded-md gap-1'>
                                                        <Image src={save} alt='save'></Image>
                                                        <p>Edit</p>
                                                    </button>
                                                    <button className='px-3 py-1 bg-amber-600 flex items-center justify-center text-white rounded-md gap-1'>
                                                        <Image src={save} alt='save'></Image>
                                                        <p>Delete</p>
                                                    </button>
                                                </td>
                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                                <div className='mt-5 flex gap-2 items-center justify-center'>
                                    <Image src={left_arrow} alt='left arrow'></Image>
                                    <p className='w-[35px] h-[35px] border rounded-md flex items-center justify-center'>1</p>
                                    <p className='w-[35px] h-[35px] border rounded-md flex items-center justify-center bg-blue-600 text-white'>2</p>
                                    <p className='w-[35px] h-[35px] border rounded-md flex items-center justify-center'>3</p>
                                    <p className='w-[35px] h-[35px] border rounded-md flex items-center justify-center'>4</p>
                                    <p className='w-[35px] h-[35px] border rounded-md flex items-center justify-center'>5</p>
                                    <Image src={right_arrow} alt='left arrow'></Image>
                                </div>
                            </>

                        </div>

                        {/* 2nd form */}
                        <div className='bg-white rounded-lg mt-5 py-5 px-5'>
                            <h3 className='font-bold text-xl'>From title</h3>
                            <p>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>
                            <div className='mt-5 flex gap-2'>
                                <button className='flex items-center bg-amber-200 border border-amber-600 w-[101px] h-[35px] gap-2 rounded-md px-2'>
                                    <Image src={flagEngland} alt='flagEngland'></Image>
                                    <p>English</p>
                                </button>

                                <button className='flex items-center border w-[101px] h-[35px] gap-2 rounded-md  px-2'>
                                    <Image src={flagTurkey} alt='flagTurkey'></Image>
                                    <p>Turkish</p>
                                </button>
                            </div>
                            {/* inner form */}
                            <div className='mt-3'>

                                {/* 1st row */}
                                <div className="form-control w-full max-w-full">
                                    <label className="label">
                                        <span className="label-text">Label Title</span>
                                    </label>
                                    <input type="text" placeholder="Placeholder content" className="input input-bordered w-full max-w-full" />

                                </div>

                                {/* 2nd row */}
                                <div className='pt-3 lg:flex gap-3'>
                                    {/* inner 1st */}
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Label Title</span>

                                        </label>
                                        <select className="select select-bordered">
                                            <option disabled selected>Chose</option>
                                            <option>Star Wars</option>
                                            <option>Harry Potter</option>
                                            <option>Lord of the Rings</option>
                                            <option>Planet of the Apes</option>
                                            <option>Star Trek</option>
                                        </select>

                                    </div>
                                    {/* inner 2 */}
                                    <div className="form-control w-full max-w-full">
                                        <label className="label">
                                            <span className="label-text">Label Title</span>
                                        </label>
                                        <input type="text" placeholder="Placeholder content" className="input input-bordered w-full max-w-full" />

                                    </div>
                                    {/* inner 3 */}
                                    <div className="form-control w-full max-w-full">
                                        <label className="label">
                                            <span className="label-text">Label Title</span>
                                        </label>
                                        <input type="text" placeholder="Placeholder content" className="input input-bordered w-full max-w-full" />

                                    </div>

                                </div>
                                {/* 3rd row */}
                                <div className='pt-3 flex gap-3'>

                                    {/* inner 1 */}
                                    <div className="form-control w-full max-w-full">
                                        <label className="label">
                                            <span className="label-text">Label Title</span>
                                        </label>
                                        <input type="text" placeholder="Placeholder content" className="input input-bordered w-full max-w-full" />

                                    </div>
                                    {/* inner 2 */}
                                    <div className="form-control w-full max-w-full">
                                        <label className="label">
                                            <span className="label-text">Label Title</span>
                                        </label>
                                        <input type="text" placeholder="Placeholder content" className="input input-bordered w-full max-w-full" />

                                    </div>

                                </div>

                                {/* 4th row */}
                                <div className="pt-3">

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Label Title</span>

                                        </label>
                                        <textarea className="textarea textarea-bordered h-[165px]" placeholder="Placeholder content"></textarea>

                                    </div>
                                </div>


                            </div>

                        </div>


                        {/* 3rd form */}
                        <div className='mt-5  grid grid-cols-1 lg:grid-cols-4 gap-3'>
                            {/* left */}
                            <div className='bg-white rounded-lg  py-5 px-5 col-span-3'>
                                <div className=''>
                                    <h3 className='font-bold text-xl'>From title</h3>
                                    <p>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>

                                    {/* inner form */}
                                    <div className='mt-3'>

                                        {/* 1st row */}
                                        <div className="form-control w-full max-w-full">
                                            <label className="label">
                                                <span className="label-text">Label Title</span>
                                            </label>
                                            <input type="text" placeholder="Placeholder content" className="input input-bordered w-full max-w-full" />

                                        </div>

                                        {/* 2nd row */}
                                        <div className='pt-3'>
                                            {/* inner 1st */}
                                            <div className="form-control w-full max-w-full">
                                                <label className="label">
                                                    <span className="label-text">Label Title</span>

                                                </label>
                                                <select className="select select-bordered">
                                                    <option disabled selected>Chose</option>
                                                    <option>Star Wars</option>
                                                    <option>Harry Potter</option>
                                                    <option>Lord of the Rings</option>
                                                    <option>Planet of the Apes</option>
                                                    <option>Star Trek</option>
                                                </select>

                                            </div>


                                        </div>
                                        {/* 3rd row */}
                                        <div className='pt-3 flex gap-3'>

                                            {/* inner 1 */}
                                            <div className="form-control w-full max-w-full">
                                                <label className="label">
                                                    <span className="label-text">Label Title</span>
                                                </label>
                                                <input type="text" placeholder="Placeholder content" className="input input-bordered w-full max-w-full" />

                                            </div>
                                            {/* inner 2 */}
                                            <div className="form-control w-full max-w-full">
                                                <label className="label">
                                                    <span className="label-text">Label Title</span>
                                                </label>
                                                <input type="text" placeholder="Placeholder content" className="input input-bordered w-full max-w-full" />

                                            </div>

                                        </div>

                                        {/* 4th row */}
                                        <div className="pt-3">

                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Label Title</span>

                                                </label>
                                                <textarea className="textarea textarea-bordered h-[165px]" placeholder="Placeholder content"></textarea>

                                            </div>
                                        </div>


                                    </div>

                                </div>
                            </div>
                            {/* right */}
                            <div className='bg-white rounded-lg  py-5 px-5 col-span-1'>
                                <div className=''>
                                    <h3 className='font-bold text-xl'>From title</h3>
                                    <p>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>

                                    {/* inner form */}
                                    <div className='mt-3'>

                                        {/* 1st row */}
                                        <div className="form-control w-full max-w-full">
                                            <label className="label">
                                                <span className="label-text">Label Title</span>
                                            </label>
                                            <input type="text" placeholder="Placeholder content" className="input input-bordered w-full max-w-full" />

                                        </div>

                                        {/* 2nd row */}
                                        <div className='pt-3'>
                                            {/* inner 1st */}
                                            <div className="form-control w-full max-w-full">
                                                <label className="label">
                                                    <span className="label-text">Label Title</span>

                                                </label>
                                                <select className="select select-bordered">
                                                    <option disabled selected>Chose</option>
                                                    <option>Star Wars</option>
                                                    <option>Harry Potter</option>
                                                    <option>Lord of the Rings</option>
                                                    <option>Planet of the Apes</option>
                                                    <option>Star Trek</option>
                                                </select>

                                            </div>


                                        </div>
                                       

                                        {/* 3rd row */}
                                        <div className="pt-3">

                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Label Title</span>

                                                </label>
                                                <textarea className="textarea textarea-bordered h-[165px]" placeholder="Placeholder content"></textarea>

                                            </div>
                                        </div>

                                        <button className='bg-blue-600 text-white rounded-md w-full text-center h-[44px] mt-3'>
                                            <p>Button title</p>

                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default dashboardPage;