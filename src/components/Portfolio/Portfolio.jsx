import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TitleText } from '../CustomTexts/CustomTexts';
import ExploreCard from './ExploreCard';
import Image1 from "../../assets/portfolio/p-14.jpeg";
import Image2 from "../../assets/portfolio/p-1.jpg";
import Image3 from "../../assets/portfolio/p-6.jpg";
import Image4 from "../../assets/portfolio/p-5.jpg";
import Image5 from "../../assets/portfolio/p16.jpeg";

const Portfolio = () => {
  const [active, setActive] = useState('p2')
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
      id: 'p1',
      imgUrl: Image1,
      title: 'Industry 4.0',
      desc: 'Reshaping Manufacturing With Human-centric Innovations',
    },
    {
      id: 'p2',
      imgUrl: Image2,
      title: 'Experience the innovation in parallel',
      desc: 'Embrace the future with digital twin Tecnology',
    },
    {
      id: 'p3',
      imgUrl: Image3,
      title: '3D Immersive apps',
      desc: 'We create 3d apps for future learners with the power of gaming and immersive technologies',
    },
    {
      id: 'p4',
      imgUrl: Image4,
      title: 'Virtual reality',
      desc: 'Discover the power of extended reality',
    },
    {
      id: 'p5',
      imgUrl: Image5,
      title: 'Product Design',
      desc: 'We Design intricate automative components',
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
        {/* <TypingText title="| Portfolio"
          textStyles="text-center" /> */}
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