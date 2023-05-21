import React from 'react'

function Input({ label, name, ...otherProps }) {

    const pad = label ? 'pt-7' : 'pt-0'

    return (
        <div className={`relative ${pad}`}>
            <label htmlFor={name} className="absolute top-0 left-1 font-[Raleway] font-bold">{label}</label>
            <input name={name} {...otherProps} className={`py-2 px-3 w-full border-2 border-[#0000006c] rounded-lg font-bold font-["Raleway"] text-md focus:border-[#7B61FF] outline-none`} />
        </div>

    )
}

export default Input
