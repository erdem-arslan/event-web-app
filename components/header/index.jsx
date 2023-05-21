"use client"
import { Button, Title } from '@/components'
import { useState } from 'react'
import Link from 'next/link'
import { CgProfile } from 'react-icons/cg';
import { AiOutlineMenu } from 'react-icons/ai';
import { Menu } from '@/mocks';
function Header({ scrolled, active }) {
  const state = active ? 'hidden' : ''
  const hide = active ? '' : 'hidden'
  const actived = active ? 'md:w-1/6' : 'md:w-2/12'
  const padd = scrolled ? 'lg:px-16 py-1.5' : 'lg:px-16 py-2.5'
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header className={` bg-white border-gray-200 sm:px-4 ${padd}   rounded border-b-2  relative`}>
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className={`${actived} text-center `}>
          <Title color="default" size="large">wex</Title>
        </div>


        <nav className={`w-full  z-30 text-center items-center justify-between md:flex md:w-auto md:order-1 ${isMenuOpen ? "absolute top-[2.8rem] left-0" : "hidden"} `}>
          <ul className="  flex flex-col p-4 mt-4 border md:mx-auto border-gray-100 rounded-b-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
            {
              Menu.map((i, index) =>
                <li key={index}>
                  <Link href={i.slug} className="block font-[Jost] font-thin  text-xl py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#4F4CEE] md:p-0">{i.title}</Link>
                </li>
              )
            }
          </ul>
        </nav>


        <div className={`z-30 text-center  ${actived}  md:order-2 relative`}>
          <div className={`  flex items-center  md:mx-auto`}>
            <button type="button" className={`flex mr-3 ${hide} text-sm  rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 `} aria-expanded={isDropdownOpen} onClick={toggleDropdown} data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <CgProfile className='text-4xl text-[#4f4cee]'></CgProfile>
            </button>
            <div className={` ${isDropdownOpen ? "" : "hidden"} ${hide} w-[11.75rem] my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-[2.25rem] left-[-95px]`}
              id="user-dropdown">
              <div className="px-4 py-3">
                <span className="block text-md text-gray-600 font-bold font-[Jost]" >Erdem Arslan</span>
                <span className="block text-sm  text-gray-500 truncate ">erdem.arslan0@ogr.dpu.edu.tr</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link href="#" className="block px-4 py-2 text-sm font-[Jost] text-gray-700 hover:bg-gray-100">My Events</Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 text-sm font-[Jost] text-gray-700 hover:bg-gray-100">Settings</Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 text-sm font-[Jost] text-gray-700 hover:bg-gray-100">Sign out</Link>
                </li>
              </ul>
            </div>
            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-3 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded={isMenuOpen} onClick={toggleMenu} >
              <AiOutlineMenu className='text-2xl'></AiOutlineMenu>
            </button>
            <div className={`flex ${state}`}>
              <div className={`hidden  lg:block mx-2`}>
                <Button isWhite>Sign Up</Button>
              </div>
              <div className='mx-2'>
                <Button  >Log In</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
