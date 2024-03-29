import React from "react";
import { FaGoogle, FaMailBulk, FaMailchimp, FaMobileAlt } from "react-icons/fa";
import image from "../../assets/GT_Tech_Logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaTwitter,
} from "react-icons/fa6";

const CompanyLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Serrvice",
    link: "/#service",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
];

const BusinessLinks = [
  {
    title: "Project",
    link: "/#",
  },
  {
    title: "Our Team",
    link: "/#",
  },
  {
    title: "Facts",
    link: "/#",
  },
  {
    title: "Costumers",
    link: "/#",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-600 ">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-15 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              <img src={image} alt="gt" className="w-80"></img>
            </a>
            <p className="text-black text-xl font-medium w-screen lg:pr-24 pt-3">
              Innovation Empowering Tomorrow
            </p>
            <p className="text-black text-xl font-medium mt-20 w-screen">
              Copyright © 2024 GramTarang Technologies | Powered by GramTarang
              Technologies
            </p>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-3xl font-extrabold sm:text-left mb-3">
                Company
              </h1>
              <ul className="space-y-3">
                {CompanyLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-black font-semibold hover:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="text-3xl font-extrabold sm:text-left mb-3">
                Business
              </h1>
              <ul className="space-y-3">
                {BusinessLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-black font-semibold dark:text-gray-400 hover:dark:text-white hover:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-3xl font-extrabold sm:text-left mb-3">
                Address
              </h1>
              <div>
                <div className="flex items-center gap-3">
                  <div className="text-sm text-black">
                    <p>
                      D No-50-42/21/4, Flat No 501, P& T Colony, Seethammadhara,
                      Vishakhapatnam – 530013, India
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMailBulk />
                  <a href="info@thegttech.com" className="hover:text-white">
                    info@thegttech.com
                  </a>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <a href="#" className="hover:text-white">
                    +91 9840015963
                  </a>
                </div>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-btn duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-btn duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-btn  duration-200" />
                  </a>
                  <a href="#">
                    <FaTwitter className="text-3xl hover:text-btn  duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
