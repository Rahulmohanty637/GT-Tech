import React from 'react'

const Company = ({ image, category, title, participants, rating, price }) => {
    return (
        <div className='p-2 shadow-lg min-w-[15rem] bg-white rounded-md'><img src={image} alt=''>
        </img></div>
    )
}

export default Company