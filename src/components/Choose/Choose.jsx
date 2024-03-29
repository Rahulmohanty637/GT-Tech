import React from 'react'
import { motion } from "framer-motion";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa6";
import courses1 from "../../assets/hero/first.png";
import courses2 from "../../assets/hero/first.png";
import courses3 from "../../assets/hero/first.png";
import courses4 from "../../assets/hero/first.png";
import courses5 from "../../assets/hero/first.png";
import courses6 from "../../assets/hero/first.png";
import courses7 from "../../assets/hero/first.png";
import courses8 from "../../assets/hero/first.png";
import Partners from './Partners';

const courses = [
    {
        id: 1,
        image: courses1,
        category: "Web Design",
        title: "The Complete Web Design Course",
        rating: 4.9,
        participants: 500,
        price: 105,
    },
    {
        id: 2,
        image: courses2,
        category: "Web Development",
        title: "FullStack Web Development Course",
        rating: 4.8,
        participants: 700,
        price: 125,
    },
    {
        id: 3,
        image: courses3,
        category: "Web Development",
        title: "Python Beginner to Advanced Course",
        rating: 4.9,
        participants: 300,
        price: 99,
    },
    {
        id: 4,
        image: courses4,
        category: "Web Design",
        title: "UI/UX Design Crazy Course With Harrys",
        rating: 4.7,
        participants: 600,
        price: 85,
    },
    {
        id: 5,
        image: courses5,
        category: "AI Development",
        title: "AI Development With Python (complete beginner course)",
        rating: 4.9,
        participants: 500,
        price: 105,
    },
    {
        id: 6,
        image: courses6,
        category: "Web Design",
        title: "The Complete Web Design Course",
        rating: 4.9,
        participants: 500,
        price: 105,
    },
    {
        id: 7,
        image: courses7,
        category: "Web Design",
        title: "The Complete Web Design Course",
        rating: 4.9,
        participants: 500,
        price: 105,
    },
    {
        id: 8,
        image: courses8,
        category: "Web Design",
        title: "The Complete Web Design Course",
        rating: 4.9,
        participants: 500,
        price: 105,
    },
];

const categories = [
    {
        id: 1,
        icon: <FaFacebook />,
        category: "Design",
    },
    {
        id: 2,
        icon: <FaInstagram />,
        category: "Development",
    },
    {
        id: 3,
        icon: <FaLinkedin />,
        category: "Business",
    },
    {
        id: 4,
        icon: <FaTwitter />,
        category: "Science",
    },
];


const Choose = () => {
    const container = {
        hidden: {
            opacity: 0,
            scale: 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <div className="section" id="courses">
            <div className="text-center">
                <div className="sm:text-3xl text-2xl font-bold mb-5">
                    Our Top <span className="text-Teal">Categories</span>
                </div>
                <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                    tempora illo laborum ex cupiditate tenetur doloribus non velit atque
                    amet repudiandae ipsa modi numquam quas odit optio, totam voluptate
                    sit! Lorem ipsum dolor sit amet.
                </p>
            </div>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8"
            >
                <motion.div
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: { y: 0, opacity: 1 }
                    }}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center flex-col gap-4 bg-white p-8 rounded-md"
                >
                    <a href="" className="text-sm text-gray">
                        View More
                    </a>
                </motion.div>
            </motion.div>
            <div className="text-xl font-bold mt-32">Our Partners</div>
            <div className="mt-12 overflow-x-hidden w-full  relative">
                <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
                    {courses.map((course) => {
                        return <Partners key={course.id} {...course} />
                    })};
                </div>
            </div>
        </div>
    )
}


export default Choose;