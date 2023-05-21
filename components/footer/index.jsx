import Link from 'next/link'
import React from 'react'
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';


import { Blocks } from '@/mocks'


function Footer() {

  return (
    <footer className='w-full bg-[#4F4CEE]  text-white '>
      <div className='container flex flex-wrap justify-between mx-auto px-4 py-8'>

        <div className='w-full md:w-1/4 px-4'><h2 className='text-7xl text-center'>WeX</h2></div>


        {
          Blocks.map((i, index) =>
            <div key={index} className='w-full md:w-1/4 px-4'>
              <ul className='leading-9 font-thin flex flex-row justify-center flex-wrap'>
                <li className=' w-full '><Link href="/" className='font-bold text-xl border-b-2 md:border-none'>{i.title}</Link></li>
                {
                  i.items.map((i, index) => <li className='md:w-full w-1/3' key={index}><Link href={i.url}> {i.title} </Link></li>)
                }

              </ul>
            </div>
          )
        }

        <div className='border-t-2 w-full md:py-2 py-10 md:px-24 items-center md:justify-between flex md:flex-row flex-col text-center '>
          <div className='md:w-1/6 flex justify-center'>
            <Link href="/"><BsInstagram className='text-xl mx-4 md:mr-4'></BsInstagram></Link>
            <Link href="/"> <BsFacebook className='text-xl mx-4 md:mr-4'></BsFacebook></Link>
            <Link href="/"><BsTwitter className='text-xl mx-4 md:mr-4'></BsTwitter></Link>
          </div>
          <div className='items-center'>
            <p className='text-xl md:m-0 mt-2 mb-10'>© 2023 WeX - All Rigth Reserved</p>
          </div>
        </div>

      </div>
    </footer>
  )
}
export default Footer