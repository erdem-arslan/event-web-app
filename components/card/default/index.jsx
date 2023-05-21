import React from 'react'
import Link from 'next/link';
import { GoLocation } from 'react-icons/go';
import { DateTime } from 'luxon'


function Card({ url = "/", image, title, date, description, location }) {

    return (
        <div className=' w-full h-full cursor-pointer font-["Raleway"] border-2  border-[#4f4cee83] rounded-md'>
            <div className='w-full h-[60%]'>
                <Link href={url}><img className='w-full h-full rounded-tl-md rounded-tr-md layout object-center object-cover' src={image} alt={title} /></Link>
            </div>
            <div className='w-full flex h-[40%] py-5 items-center'>
                <div className='w-[20%] '>
                    <Link href={url}>   <p className='text-center font-bold'>{DateTime.fromISO(date).setLocale('tr').toFormat('d')}</p></Link>
                    <Link href={url}>   <p className='text-center font-bold'>{DateTime.fromISO(date).setLocale('tr').toFormat('MMM')}</p></Link>
                </div>
                <div className='w-[80%] leading-7'>
                    <div className='w-36'>
                        <Link href={url}><h4 className='font-bold text-sm truncate'>{title}</h4></Link>
                    </div>
                    <Link href={url}> <p className='md:block hidden'>{description}</p></Link>
                    <div className='flex items-center w-36'>
                        <Link href={url}><GoLocation className='mr-1 text-sm font-bold' /></Link>
                        <Link href={url}><p className='text-sm font-medium truncate'>{location}</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card