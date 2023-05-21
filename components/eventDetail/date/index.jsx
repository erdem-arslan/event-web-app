import React from 'react'
import { GoCalendar } from 'react-icons/go';
function Date({ children }) {
    return (
        <div className='flex items-center font-[jost]'>
            <GoCalendar />
            <p className='ml-2'>{children}</p>
        </div>
    )
}

export default Date