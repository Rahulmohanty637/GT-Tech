import React from 'react'
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import who from "../../assets/portfolio/who.png";
import BgImg from "../../assets/hero/first.png";

const bgImage = {
    backgroundImage: `url(${BgImg})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

const Who = () => {
  return (
    <>
    <span id="about"></span>
    <div className='bg-white'>
      <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Image section */}
            <div data-aos="zoom-in">
              <img
                src={who}
                alt="biryani img"
                className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
              />
            </div>
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-cursive"
              >
              WHO WE ARE
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm text-gray-500 tracking-wide leading-5"
              >
              GT Technologies is a sister company of Centurion University and Gram Tarang Employability Training Services.

              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-5">
                  <div data-aos="fade-up" className="flex items-center gap-3">
                    <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                    <span> Product & Solutions development </span>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="flex items-center gap-3"
                  >
                    <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " />
                    <span>Engineering services and SaaS for niche technologies and solutions </span>
                  </div>
                </div>
                <div
                  data-aos="slide-left"
                  className="border-l-4 border-primary/50 pl-6 space-y-2"
                >
                  <h1 className="text-2xl font-semibold font-cursive ">
                    Partners
                  </h1>
                  <p className="text-sm text-gray-500">
                  GT Technologies partners with Dassault Systemes India, AUS - Aarav Unmanned Systems-Bangalore, Advance Mechanical Services P Ltd (AMS) – Bangalore & others to work collaboratively in engineering services & solution implementation for valued customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Who