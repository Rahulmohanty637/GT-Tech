import React from 'react';
import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../CustomTexts/CustomTexts';
import Points from './Points';
import image from '../../assets/service/consultant.jpg'


const ConsultingServices = () => {
  const consutant = [
    "Decades of Expertise: Over 15 years of experience in product development and engineering services, with a proven track record of success in diverse industries.",

    "Cutting-Edge Solutions: Specializing in CAD/CAM technologies for efficient and innovative product design. Major cases include optimizing designs for automotive and aerospace sectors.",

    "Streamlined Processes: Proficiency in PLM tools to define solutions and enhance product lifecycle management. Successfully implemented streamlined processes for electronics and consumer goods industries.",
  ]

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
        className={`2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-0`}
      >
        <motion.div
          variants={planetVariants('left')}
          className={`flex-1 flex justify-center items-center`}
        >
          <img
            src={image}
            alt="Consultannt"
            className="w-[100%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| Consulting Services" />
          <TitleText title={<>Advanced Product Development and Engineering Consulting Services</>} />
          <div className="mt-[31px] flex flex-col max-w-[560px] gap-[17px]">
            {consutant.map((feature, index) => {
              return <Points
                key={feature}
                number={`${index < 10 ? '0' : ''} ${index + 1}`}
                text={feature} />
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

      </motion.div>
    </section>
  )
}

export default ConsultingServices;