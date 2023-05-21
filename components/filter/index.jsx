"use client"
import { useState } from "react";
import { FiFilter } from 'react-icons/fi';
import { FaFilter } from 'react-icons/fa';

import { Toggle, Checkbox, Datepicker, Title, Button } from '@/components'


function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (

    <div className="w-full">
      <div className="flex items-center px-3">
        <button className="md:hidden flex items-center text-lg  " data-collapse-toggle="mobile-filter-menu" aria-controls="mobile-filter-menu" aria-expanded={isOpen} onClick={toggleDropdown}>
          <FiFilter className={`text-2xl text-[#4f4cee] ${isOpen ? 'hidden' : ''}`}></FiFilter>
          <FaFilter className={`text-2xl text-[#4f4cee] ${isOpen ? '' : 'hidden'}`}></FaFilter>
        </button>
        <p className={`text-2xl font-[Jost] md:hidden ${isOpen ? 'hidden' : ''}`}>  Filters</p>

      </div>

      <div className={`w-full h-screen bg-white ${!isOpen ? 'hidden' : ''}`} />
      <div className={`flex flex-col  bg-white md:block ${isOpen ? "absolute top-24 left-1/2 transform -translate-x-1/2" : "hidden"}`}>
        <div className="mb-5 pb-5 border-b-2 border-[#0000000e]">
          <h3 className="text-3xl font-[Jost] ">Filters</h3>
        </div>
        <div className="mb-5 pb-5 border-b-2 border-[#0000000e]">
          <Toggle>Online</Toggle>
        </div>
        <div className="mb-5 w-full pb-5 px-2 border-b-2 border-[#0000000e]">
          <div className="mb-2"> <Title size="small"> Select Order</Title></div>
          <ul className="py-2 text-sm text-gray-700 " >
            <li><Checkbox message="Tarih : Uzaktan Yakına" /></li>
            <li><Checkbox message="Tarih : Yakından Uzağa" /></li>
          </ul>
        </div>
        <div className=" mb-5 pb-5 ">
          <div className="mb-2"> <Title size="small"> Select Date</Title></div>
          <Datepicker />
        </div>
        <div className=" mb-5 pb-5 border-b-2 border-[#0000000e] w-full">

          <div className="mb-2">
            <Title size="small"> Kategoriler</Title>
          </div>

          <div
            className={`h-auto z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full`}>
            <ul className="py-2 text-sm text-gray-700 lg:max-h-60 max-h-32 overflow-y-auto" >
              <li><Checkbox message="Konser" /></li>
              <li><Checkbox message="Sanat" /></li>
              <li><Checkbox message="Söyleşi" /></li>
              <li><Checkbox message="Bilim" /></li>
              <li><Checkbox message="Gezi / Seyehat" /></li>
              <li><Checkbox message="Sağlık" /></li>
              <li><Checkbox message="Spor" /></li>
              <li><Checkbox message="Sinema" /></li>
              <li><Checkbox message="Tiyatro" /></li>
              <li><Checkbox message="Teknoloji" /></li>
              <li><Checkbox message="Yazılım" /></li>
              <li><Checkbox message="Turnuva" /></li>
              <li><Checkbox message="Tasarım" /></li>
              <li><Checkbox message="Yiyecek / İçecek" /></li>
            </ul>
          </div>
        </div>
        <div>
          <Button >Değişiklikleri kaydet</Button>
        </div>
      </div >
    </div>


  );
}

export default Filter

