
import React from 'react'

function button({ children, isWhite, disabled}) {
  const bgColor = isWhite ? 'bg-white text-[#4f4cee] ' : 'text-[#fff] bg-[#4f4cee]';
  const passive = disabled ? 'bg-[#4f4cee5e] text-[#fff] border-[#4f4cee5e] cursor-no-drop' : 'active:shadow-[-5px_-5px_0px_1px_rgba(0,34,186,1)] hover:shadow-[6px_6px_0px_1px_rgba(0,34,186,1)] ';

  return (
      <button type='submit' className={`${bgColor} border-2 border-[#4f4cee] px-4 w-full py-2.5  font-semibold ${passive} font-sans rounded`}>
         {children}
       </button>
  );
}

export default button;