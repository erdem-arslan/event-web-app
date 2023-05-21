import React from 'react'
import { AiOutlineFieldTime, AiFillWarning } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';

function Information({ duration, audience, attention })
{
    return (
        <div>
            <div className='text-2xl font-[Raleway] font-bold mb-3'>Event Information</div>

            <div className='flex md:flex-row justify-start flex-col w-full' >

                <div className={`md:w-1/4 md:my-2 w-full my-2 mr-12 ${!duration && 'hidden'} flex items-start`}>
                    <div className='text-5xl mr-2 text-[#4f4cee]'>
                        <AiOutlineFieldTime />
                    </div>
                    <div>
                        <div className='text-xl font-bold font-[Raleway]'>Duration</div>
                        <div className='font-[Jost] text-sm text-[#0000008f]'>{duration}</div>
                    </div>
                </div>


                <div className={`md:w-1/4 md:my-2 w-full my-2 mr-12 ${!audience && 'hidden'} flex items-start`}>
                    <div className='text-5xl mr-2 text-[#4f4cee]'>
                        <BsFillPeopleFill />
                    </div>
                    <div>
                        <div className='text-xl font-bold font-[Raleway]'>Audience</div>
                        <div className='font-[Jost] text-sm text-[#0000008f]'>{audience}</div>
                    </div>
                </div>


                <div className={`md:w-1/4 md:my-2 w-full my-2 mr-12 ${!attention && 'hidden'} flex items-start`}>
                    <div className='text-5xl mr-2 text-[#4f4cee]'>
                        <AiFillWarning />
                    </div>
                    <div>
                        <div className='text-xl font-bold font-[Raleway]'>Attention</div>
                        <div className='font-[Jost] text-sm text-[#0000008f]'>{attention}</div>
                    </div>
                </div>

                {/* <div className={`md:w-1/4 md:my-2 w-full my-2 ${!location && 'hidden'} flex items-start`}>
                    <div className='text-5xl mr-2 text-[#4f4cee]'>
                        <ImLocation />
                    </div>
                    <div>
                        <div className='text-xl font-bold font-[Raleway]'>Location</div>
                        <div className='font-[Jost] text-sm text-[#0000008f]'>{location}</div>
                    </div>
                </div> */}
            </div>

        </div>
    )
}

export default Information