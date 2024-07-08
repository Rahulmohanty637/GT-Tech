import React from 'react';
import Company1 from '../../assets/partners/Dassault_logo.png';
import Company2 from '../../assets/partners/ashok-leyland-33470.png';
import Company3 from '../../assets/partners/Hyundai-Logo-1.png';
import Company4 from '../../assets/partners/aws.png';
import Company5 from '../../assets/partners/HCL.png';


import Company from './Company';

const companies = [
    {
        id: 1,
        image: Company1,
        category: "Web Design",
        title: "The Complete Web Design Course",
        rating: 4.9,
        participants: 500,
        price: 105,
    },
    {
        id: 2,
        image: Company2,
        category: "Web Development",
        title: "FullStack Web Development Course",
        rating: 4.8,
        participants: 700,
        price: 125,
    },
    {
        id: 3,
        image: Company3,
        category: "Web Development",
        title: "Python Beginner to Advanced Course",
        rating: 4.9,
        participants: 300,
        price: 99,
    },
    {
        id: 4,
        image: Company4,
        category: "Web Design",
        title: "UI/UX Design Crazy Course With Harrys",
        rating: 4.7,
        participants: 600,
        price: 85,
    },
    {
        id: 5,
        image: Company5,
        category: "AI Development",
        title: "AI Development With Python (complete beginner course)",
        rating: 4.9,
        participants: 500,
        price: 105,
    },
   
];

const Partners = () => {
    return (
        <div className="section -mt-20" id="courses">
            <div className="text-center">
                <div className="sm:text-3xl text-2xl font-bold mb-10">
                    Collaborate and Partners with
                </div>
                <div className='mt-12 overflow-x-hidden w-full '>
                    <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
                        {companies.map((company) => {
                            return <Company key={company.id} {...company} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners;