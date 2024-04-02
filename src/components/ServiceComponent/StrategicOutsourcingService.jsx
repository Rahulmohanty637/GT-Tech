import React from 'react';
import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../CustomTexts/CustomTexts';
import StrategicPoints from './StrategicPoints';
import icon1 from "../../assets/icons/expertise.png";
import icon2 from "../../assets/icons/outsource.png";
import image from "../../assets/service/outsource.jpg";


const StrategicOutsourcingService = () => {

    const newFeatures = [
        {
            imgUrl: icon1,
            title: 'Comprehensive Expertise',
            subtitle:
                ' Offering expertise in product design, software development, AI & ML, and 3D interactive content development. Specialized in CAD/CAM, PLM tools, software development, and Unity, among others.',
        },
        {
            imgUrl: icon2,
            title: 'Flexible Outsourcing Options',
            subtitle:
                'Providing flexible solutions through staff augmentation and Annual Maintenance Contracts (AMC). Enables businesses to access top talent and enhance project capabilities while focusing on core competencies.',
        },
    ];

    const staggerContainer = (staggerChildren, delayChildren) => ({
        hidden: {},
        show: {
            transition: {
                staggerChildren,
                delayChildren,
            },
        },
    });

    const planetVariants = (direction) => ({
        hidden: {
            x: direction === 'left' ? '-100%' : '100%',
            rotate: 120,
        },
        show: {
            x: 0,
            rotate: 0,
            transition: {
                type: 'spring',
                duration: 1.8,
                delay: 0.5,
            },
        },
    });

    const fadeIn = (direction, type, delay, duration) => ({
        hidden: {
            x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
            y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type,
                delay,
                duration,
                ease: 'easeOut',
            },
        },
    });


    return (
        <section className={`sm:p-16 xs:p-8 px-6 py-12 relative z-10`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8`}
            >
                <motion.div
                    variants={fadeIn('right', 'tween', 0.2, 1)}
                    className="flex-[0.95] flex justify-center flex-col"
                >
                    <TypingText title="| Strategic Outsourcing Solutions" />
                    <TitleText title={<>Comprehensive Strategic Outsourcing Solutions for Enhanced Project Capabilities</>} />
                    <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
                        {newFeatures.map((feature) => {
                            return <StrategicPoints key={feature.title} {...feature} />
                        })}
                    </div>
                    <br />
                    <div className='flex gap-10'>
                        <div className="z-10 space-x-6">
                            <button className="relative border-2 font-medium border-purple-600 bg-transparent py-2.5 px-5 uppercase text-purple-600 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-purple-600 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
                                Know more
                            </button>
                        </div>
                        <div className="z-10 space-x-6">
                            <button className="relative border-2 font-medium border-purple-600 bg-transparent py-2.5 px-5 uppercase text-purple-600 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-purple-600 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={planetVariants('right')}
                    className={`flex-1 flex justify-center items-center`}
                >
                    <img
                        src={image}
                        alt="get-started"
                        className="w-[90%] h-[90%] object-contain"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default StrategicOutsourcingService