import React from 'react'
import Link from 'next/link';
import { CgCommunity } from 'react-icons/cg';
import { GoCalendar, GoLocation } from 'react-icons/go';
function Eventhead({ title, clubUrl = "/", community, date, location, desc }) {
    return (
        <div className='w-full md:w-[34rem]'>
            <div className='font-[Raleway] my-3 font-bold text-3xl'>
                <p>{title}</p>
            </div>
            <div className='flex items-center my-2 font-[jost]'>
                <Link href={clubUrl}><CgCommunity /></Link>
                <Link href={clubUrl} className='ml-2'>{community}</Link>
            </div>
            <div className='flex items-center my-2 font-[jost]'>
                <GoCalendar />
                <p className='ml-2'>{date}</p>
            </div>
            <div className='flex items-center my-2 font-[jost]'>
                <GoLocation />
                <p className='ml-2'>{location}</p>
            </div>
            <div>
                <p className='font-[jost] my-3 text-[#000000c2]'>
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default Eventhead