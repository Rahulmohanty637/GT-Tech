import React from 'react'

const StrategicPoints = ({ imgUrl, title, subtitle }) => {
    return (
        <div className="flex-1 flex flex-col sm:max-w-[280px] min-w-[210px]">
            <div
                className={`flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-btn`}
            >
                <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
            </div>
            <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-black">
                 {title}
            </h1>
            <p className="flex-1 mt-[16px] font-normal text-[15px] text-black leading-[25.4px]">
                {subtitle}
            </p>
        </div>
    )
}

export default StrategicPoints