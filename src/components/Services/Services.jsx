import React from "react";
import Img2 from "../../assets/hero/fourth.png";
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "E-Mobility",
    description:
      "E-Mobility leaders, crafting Electric Vehicles and supplying parts for sustainable urban transportation.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Digital Manufacturing",
    description:
      "Revolutionizing production through advanced technology and automation, ushering in a new era of efficiency and innovation.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Digital Prototyping",
    description:
      "Harnessing cutting-edge technology to create innovative solutions. Join us in shaping the virtual future.",
    aosDelay: "500",
  },
  {
    id: 4,
    img: Img2,
    name: "BIM",
    description:
      "Leveraging technology to transform urban living for a brighter, connected future. Join our journey to smarter, more sustainable cities.",
    aosDelay: "500",
  },
  {
    id: 5,
    img: Img2,
    name: "Apparel and Furniture Design",
    description:
      "Crafting fashion and interiors that blend artistry and functionality, elevating lifestyles with our unique designs and vision.",
    aosDelay: "500",
  },
  {
    id: 6,
    img: Img2,
    name: "AR-VR",
    description:
      "Crafting immersive experiences that redefine reality. Join us in this immersive journey.",
    aosDelay: "500",
  },
  {
    id: 7,
    img: Img2,
    name: "Cloud Solutions",
    description:
      "Harness the power of cloud solutions to streamline operations and scale your business effortlessly.",
    aosDelay: "500",
  },
  {
    id: 8,
    img: Img2,
    name: "Mining",
    description:
      "Delivering innovative solutions for more efficient and sustainable mining operations. Join us in redefining mining excellence.",
    aosDelay: "500",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
            How can we help you?
            </h1>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 md:gap-5 mt-10 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] md:mt-20"
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
