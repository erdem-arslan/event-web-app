import React from 'react'
import Image from 'next/image'
function Banner() {
    return (
        <div className="flex items-center justify-center h-48 w-full md:h-80 md:p-4 overflow-hidden  rounded bg-[#DADAFB]">
            <Image width={500} height={400} alt='image' src="/card/default2.png" className="w-full h-full object-cover border-2 rounded border-[#0000005b] " />
        </div>
    )
}

export default Banner