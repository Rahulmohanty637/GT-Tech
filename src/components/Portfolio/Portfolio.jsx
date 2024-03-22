import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypingText, TitleText } from '../CustomTexts/CustomTexts';
import ExploreCard from './ExploreCard';
import Image1 from "../../assets/hero/first.png";
import Image2 from "../../assets/hero/second.png";
import Image3 from "../../assets/hero/third.png";

const Portfolio = () => {
  const [active, setActive] = useState('world-2')
  const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });

  const exploreWorlds = [
    {
      id: 'world-1',
      imgUrl: Image1,
      title: 'The Hogwarts',
    },
    {
      id: 'world-2',
      imgUrl: Image2,
      title: 'The Upside Down',
    },
    {
      id: 'world-3',
      imgUrl: Image3,
      title: 'Kadirojo Permai',
    },
    {
      id: 'world-4',
      imgUrl: Image2,
      title: 'Paradise Island',
    },
    {
      id: 'world-5',
      imgUrl: Image1,
      title: 'Hawkins Labs',
    },
  ];

  return (
    <section className='sm:p-16 xs:p-8 px-6 py-12' id='explore'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className='2xl:max-w-[1280px] w-full mx-auto flex flex-col'
      >
        <TypingText title="| Portfolio"
          textStyles="text-center" />
        <TitleText title={<>Portfolio
          <br className='md:block hidden' /></>} textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
        {exploreWorlds.map((world, index) => (
          <ExploreCard
          key={world.id}
          {...world}
          index={index}
          active={active}
          handleClick={setActive}/>
        ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Portfolio;