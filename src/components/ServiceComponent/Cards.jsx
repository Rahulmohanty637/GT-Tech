import React from 'react';
import { motion } from "framer-motion";
import expertise from "../../assets/icons/expertise.png";
import Innovation from "../../assets/icons/project-management.png";
import Quality from "../../assets/icons/assurance.png";
import Cost from "../../assets/icons/profit.png";
import Client from "../../assets/icons/centralized.png";
import Feature from '../Choose/Feature';

const cards = [
    {
        id: 1,
        icon: expertise,
        category: "Expertise",
        desc: "Our team of experienced professionals is dedicated to delivering exceptional results.",
    },
    {
        id: 2,
        icon: Innovation,
        category: "Innovation",
        desc: "We leverage the power of the 3DExperience Platform to stay at the forefront of the latest.",
    },
    {
        id: 3,
        icon: Quality,
        category: "Quality Assurance",
        desc: " We ensure the highest quality standards is maintained and delivered.",
    },
    {
        id: 4,
        icon: Cost,
        category: "Cost-Effective",
        desc: "We offer competitive pricing and work efficiently to maximize the value of your investment.",
    },
    {
        id: 5,
        icon: Client,
        category: "Client-Centric",
        desc: "Keeping scope of the project at top with complete customer involvement is our top priority.",
    }, ,
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
                    Why Gramtarang Technologies for you?
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
                className='grid md:grid-cols-5 sm:grid-cols-2 mt-12 gap-8'>
                {cards.map((card)=> {
                    return <Feature key={card.id} {...card}/>
                })}
            </motion.div>
        </div>
    )
}

export default Cards