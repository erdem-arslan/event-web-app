"use client"
import { useState } from 'react'

function Pass({ label, name, ...otherProps }) {

  const [type, setType] = useState(false)
  const [inputValue, setInputValue] = useState("");
  const pad = label ? 'pt-7' : 'pt-0'

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (

    <div className={`relative ${pad}`}>
      <label htmlFor={name} className="absolute top-0 left-1 font-[Raleway] font-bold">{label}</label>
      <input type={type ? 'text' : 'password'} name={name} value={inputValue} onChange={handleInputChange} {...otherProps} className={`py-2 px-3 border-2 border-[#0000006c] rounded-lg w-full font-bold font-["Raleway"] text-md focus:border-[#7B61FF] outline-none`} />
      {inputValue.trim() !== "" && (
        <span onClick={() => setType(!type)} className='p-0 px-2 text-left absolute top-[2.3rem] right-[1rem] rounded font-bold font-["Jost"] text-[#000] text-sm'>{type ? 'Hide' : 'Show'}</span>
      )
      }
    </div >

  )
}

export default Pass