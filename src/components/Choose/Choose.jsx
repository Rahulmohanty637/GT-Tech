import React from 'react'
import { motion } from "framer-motion";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa6";
import Features from './Features';


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

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

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
                    variants={item}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center flex-col gap-4 bg-white p-8 rounded-md"
                >
                    <div className="text-4xl text-Teal">{}</div>
                    <div>{category}</div>
                    <a href="" className="text-sm text-gray">
                        View More
                    </a>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Choose;