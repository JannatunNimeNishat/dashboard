"use client"
import NavBar from '@/component/NavBar/NavBar';
import Link from 'next/link';
import React from 'react';

const dashboardPage = () => {

    return (
        <div>
            <div className='h-[50px]  flex items-center'>
                <NavBar></NavBar>
            </div>
            <div className='grid grid-cols-7'>
                <div className='col-span-1 bg-[#262626] px-3 py-2'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ipsam enim ullam omnis maiores cumque veniam iure consectetur suscipit, eius, et quas nostrum aperiam. Fuga incidunt accusantium quasi unde officiis?
                </div>
                <div className='col-span-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam voluptatibus obcaecati voluptatem, iure porro iste illum incidunt magni at, inventore, quaerat perspiciatis. Animi delectus nisi repellat dolorem necessitatibus optio.
                </div>
            </div>
        </div>
    );
};

export default dashboardPage;