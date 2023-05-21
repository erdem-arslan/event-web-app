import React from 'react';
import Link from 'next/link';
import { CgCommunity } from 'react-icons/cg';


function Community({ url = "/", children })
{
    return (
        <div className='flex items-center font-[jost]'>
            <Link href={url}><CgCommunity /></Link>
            <Link href={url} className='ml-2'>{children}</Link>
        </div>
    )
}

export default Community