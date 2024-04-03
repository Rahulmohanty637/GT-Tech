import React from 'react';
import { motion } from "framer-motion";
import consultant from "../../assets/icons/consulting.png";
import Manufacture from "../../assets/icons/manufacture.png";
import Transformation from "../../assets/icons/digital.png";
import Edutech from "../../assets/icons/edutech.png";
import CardContent from './CardContent';

const cards = [
    {
        id: 1,
        icon: consultant,
        category: "Intelligent Product Design Development Consulting ",
    },
    {
        id: 2,
        icon: Manufacture,
        category: "Manufacturing Execution System",
    },
    {
        id: 3,
        icon: Transformation,
        category: "Digital Transformation Consulting through PLM",
    },
    {
        id: 4,
        icon: Edutech,
        category: "Edutech for Skill Development",
    }, 
];

const Cards = () => {
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
                    Our Offerings
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
                className='grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8'>
                {cards.map((card)=> {
                    return <CardContent key={card.id} {...card}/>
                })}
            </motion.div>
        </div>
    )
}

export default Cards