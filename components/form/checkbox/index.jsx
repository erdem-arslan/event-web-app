import React from 'react'

function Checkbox({ id, name, message }) {
  return (
    <label htmlFor={id} className="flex items-start p-0">
      <input id={id} name={name} type="checkbox" className="w-4 h-4 border-gray-300 mt-1 mr-2 accent-[#4f4cee]" />
      <span className="m-0 p-0 text-gray-700 font-medium leading-relaxed font-['Jost']">{message}</span>
    </label>
  )
}

export default Checkbox
