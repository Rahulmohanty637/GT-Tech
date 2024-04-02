import React from 'react'

const Points = ({ number, text }) => {
  return (
    <div className={`flex justify-center items-center flex-row`}>
    <div
      className={`flex justify-center items-center w-[70px] h-[75px] rounded-[24px] bg-btn`}
    >
      <p className="font-bold text-[20px] text-white">
        {number}
      </p>
    </div>
    <p className="flex-1 ml-[10px] font-normal text-[15px] text-black leading-[22.4px]">
      {text}
    </p>
  </div>
  )
}

export default Points