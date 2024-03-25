import React from "react";
import navy from "../../assets/partners/indiannavylogo.png";
import apssd from "../../assets/partners/apssdlogo.png";
import osda from "../../assets/partners/osdalogo.png";
import idco from "../../assets/partners/idcologo.png";
import vtu from "../../assets/partners/vtulogo.png";
import { TypingText, TitleText } from '../CustomTexts/CustomTexts';

const Clients = () => {
  return (
    <div>
      <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
            Our Clients
          </h1>
        </div>
    <div
      data-aos="zoom-out"
      className="py-8 mt-18 hidden md:block bg-gray-300 dark:bg-white/10"
    >
      <div className="container">
        <div className="grid grid-cols-5 gap-3 place-items-center opacity-50">
          <img src={navy} alt="brand" className="w-[80px] dark:invert" />
          <img src={apssd} alt="brand" className="w-[100px] dark:invert" />
          <img src={osda} alt="brand" className="w-[130px] dark:invert" />
          <img src={idco} alt="brand" className="w-[130px] dark:invert" />
          <img src={vtu} alt="brand" className="w-[130px] dark:invert" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Clients;
