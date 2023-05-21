"use client"
import React from 'react'
import { useState } from 'react'

function Toggle({ children }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <label className="relative text-lg inline-flex items-center mr-5 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={handleCheckboxChange} />

      <div
        className={`w-11 h-6 bg-[#4f4cee28] rounded-full peer  peer-focus:ring-4 peer-focus:ring-[#4f4cee34] ${isChecked ? 'peer-checked:after:translate-x-full' : ''} peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all ${isChecked ? 'peer-checked:bg-[#4f4cee]' : ''}`} />

      <span className={`ml-3 text-md font-["Jost"]  font-medium ${isChecked ? 'text-[#4f4cee]' : 'text-gray-300'}`}>
        {children}
      </span>
    </label>

  )
}

export default Toggle







































