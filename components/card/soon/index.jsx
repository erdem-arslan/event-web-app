import React from 'react'
import Image from 'next/image';

import { DateTime } from 'luxon';


function soonCard({ image, title, date })
{
    const verilenTarih = date;
    const today = DateTime.now().set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
    const diff = today.diff(DateTime.fromISO(verilenTarih), 'days').days;
    const result = `Son ${Math.floor(Math.abs(diff))} Gün!`;
    return (

        <div className={`lg:w-[20rem] lg:h-[20rem] md:w-[18rem] md:h-[18rem] w-[14rem] h-[14rem] border-2 border-[rgba(0,34,186,0.3)] rounded-lg cursor-pointer relative`}>

            <div className="rounded-md object-cover h-full w-full absolute top-0 left-0">
                <Image className='rounded-md object-cover'
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </div>
            <div className='rounded-md absolute top-[6rem] left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent'></div>
            <h2 className='text-white absolute text-[1.4rem] font-bold bottom-16 left-6 '>{title}</h2>
            <p className='text-[#ee4c4c] absolute font-semibold text-[1.2rem] bottom-8 left-6'>{result}</p>
        </div>

    )
}

export default soonCard

