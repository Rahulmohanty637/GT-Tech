import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import logo from "../../assets/GT_Tech_Logo.png";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);

  const toggleServiceDropdown = () => {
    setIsServiceOpen(!isServiceOpen);
    setIsProductOpen(false); // Close other dropdowns
    setIsIndustryOpen(false);
    setIsSolutionOpen(false);
  };

  const toggleProductDropdown = () => {
    setIsProductOpen(!isProductOpen);
    setIsServiceOpen(false); // Close other dropdowns
    setIsIndustryOpen(false);
    setIsSolutionOpen(false);
  };

  const toggleSolutionDropdown = () => {
    setIsSolutionOpen(!isSolutionOpen);
    setIsServiceOpen(false); // Close other dropdowns
    setIsIndustryOpen(false);
    setIsProductOpen(false);
  };

  const toggleIndustryDropdown = () => {
    setIsIndustryOpen(!isIndustryOpen);
    setIsServiceOpen(false); // Close other dropdowns
    setIsProductOpen(false);
    setIsSolutionOpen(false);
  };

  return (
    <nav className={`py-8 relative`}>
      <>
        <nav className="max-w-8xl ml-12 mr-12 bg-gray-600 rounded-3xl raleway">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-24">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a href="/" className="text-white">
                    {/* <img src="logo.jpg" className="w-10 h-15 mx-auto"></img> */}
                    <img
                      src={logo}
                      alt="search"
                      className="w-[194px] h-[154px] object-contain"
                    />
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center space-x-4">
                  <FlyoutLink href="/about">About</FlyoutLink>
                  <FlyoutLink href="/service" FlyoutContent={ServiceContent}>
                    Services
                  </FlyoutLink>
                  <FlyoutLink href="#" FlyoutContent={ProductContent}>
                    Products
                  </FlyoutLink>
                  <FlyoutLink href="#" FlyoutContent={SolutionsContent}>
                    Solutions
                  </FlyoutLink>
                  <FlyoutLink href="#" FlyoutContent={IndustryContent}>
                    Industry
                  </FlyoutLink>
                  <FlyoutLink href="#">Contact</FlyoutLink>
                  <button
                    type="button"
                    className="flex items-center h-[12px] py-4 px-4 bg-purple-600
                    rounded-[32px] gap-[10px]"
                  >
                    <span className="font-sans text-[18px] text-white">
                      +91 9840015963
                    </span>
                  </button>
                </div>
              </div>
              <div className="md:hidden flex items-center">
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md text-white  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={toggleNavbar}
                >
                  {isClick ? (
                    <svg
                      className="h-6 w-6"
                      xmlns=""
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6"
                      xmlns=""
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          {isClick && (
            <div className="md:hidden">
              <div className="">
                <ul className="divide-y divide-gray-300">
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        /* Handle About click */
                      }}
                      className="block py-2 w-full text-left focus:outline-none"
                    >
                      About
                    </button>
                  </li>
                  <li>
                    {/* Dropdown menu for Services */}
                    <MobileDropdownMenu
                      title="Services"
                      isOpen={isServiceOpen}
                      toggleDropdown={toggleServiceDropdown}
                    >
                      <ServiceContent />
                    </MobileDropdownMenu>
                  </li>
                  <li>
                    {/* Dropdown menu for Products */}
                    <MobileDropdownMenu
                      title="Products"
                      isOpen={isProductOpen}
                      toggleDropdown={toggleProductDropdown}
                    >
                      <ProductContent />
                    </MobileDropdownMenu>
                  </li>
                  <li>
                    {/* Dropdown menu for Solutions */}
                    <MobileDropdownMenu
                      title="Solutions"
                      isOpen={isSolutionOpen}
                      toggleDropdown={toggleSolutionDropdown}
                    >
                      <SolutionsContent />
                    </MobileDropdownMenu>
                  </li>
                  <li>
                    {/* Dropdown menu for Industry */}
                    <MobileDropdownMenu
                      title="Industry"
                      isOpen={isIndustryOpen}
                      toggleDropdown={toggleIndustryDropdown}
                    >
                      <IndustryContent />
                    </MobileDropdownMenu>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        /* Handle Contact click */
                      }}
                      className="block py-2 w-full text-left focus:outline-none"
                    >
                      Contact
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="flex items-center h-[15px] py-4 px-4 bg-purple-600 rounded-[32px] gap-[10px] w-12px"
                    >
                      <span className="font-sans text-[18px] text-white">
                        +91 9840015963
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </>
    </nav>
  );
};

const MobileDropdownMenu = ({ title, isOpen, toggleDropdown, children }) => {
  return (
    <div className="relative z-10">
      <button
        type="button"
        onClick={toggleDropdown}
        className="block py-2 w-full text-left focus:outline-none flex items-center justify-between"
      >
        <span className="z-10">{title}</span>
        <span className="ml-2">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline-block transform rotate-180 transition-transform duration-200"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a.75.75 0 01-.525-.225l-7-7a.75.75 0 011.05-1.05L10 16.45l6.475-6.725a.75.75 0 111.05 1.05l-7 7A.75.75 0 0110 18z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline-block transform transition-transform duration-200"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a.75.75 0 01-.525-.225l-7-7a.75.75 0 011.05-1.05L10 16.45l6.475-6.725a.75.75 0 111.05 1.05l-7 7A.75.75 0 0110 18z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="absolute w-full left-0 mt-1 bg-white shadow-lg rounded-lg">
          {children}
        </div>
      )}
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = open && FlyoutContent;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit z-30"
    >
      <a href={href} className="relative text-white">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ x: "-50%" }}
            className="absolute left-1/2 top-12 w-[300px] bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AboutContent = () => {
  return <div></div>;
};

const ServiceContent = () => {
  return (
    <div className=" w-84 text-black bg-white p-6 shadow-xl z-50">
      <div className="mb-3 space-y-3 z-40">
        <h3 className="font-semibold">EAAS (Engineering As a Service)</h3>
        <a href="#" className="block text-sm hover:underline">
          Design
        </a>
        <a href="#" className="block text-sm hover:underline">
          Simulation
        </a>
        <a href="#" className="block text-sm hover:underline">
          Manufacturing
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">SAAS (Software As a Service)</h3>
        <a href="#" className="block text-sm hover:underline">
          Product Lifecycle Management
        </a>
        <a href="#" className="block text-sm hover:underline">
          E-Vehicle
        </a>
        <a href="#" className="block text-sm hover:underline">
          Cloud Solutions
        </a>
      </div>
    </div>
  );
};

const ProductContent = () => {
  return (
    <div className=" w-84 text-black bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">Softwares</h3>
        <a href="#" className="block text-sm hover:underline">
          Dassault Systems
        </a>
        <a href="#" className="block text-sm hover:underline">
          3d Printer
        </a>
        <a href="#" className="block text-sm hover:underline">
          AgriConnect
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">Mobility Product</h3>
        <a href="#" className="block text-sm hover:underline">
          E-vehicle
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">Content</h3>
        <a href="#" className="block text-sm hover:underline">
          3D Learning Content
        </a>
      </div>
    </div>
  );
};

const SolutionsContent = () => {
  return (
    <div className=" w-84 text-black bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <a href="#" className="block text-sm hover:underline">
          Auto Component Design
        </a>
        <a href="#" className="block text-sm hover:underline">
          Reverse Engineering
        </a>
        <a href="#" className="block text-sm hover:underline">
          Blockchain
        </a>
      </div>
    </div>
  );
};
const IndustryContent = () => {
  return (
    <div className=" w-84 text-black bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <a href="#" className="block text-sm hover:underline">
          Automotive
        </a>
        <a href="#" className="block text-sm hover:underline">
          Aerospace
        </a>
        <a href="#" className="block text-sm hover:underline">
          Shipbuilding
        </a>
        <a href="#" className="block text-sm hover:underline">
          Construction
        </a>
        <a href="#" className="block text-sm hover:underline">
          Life Sciences
        </a>
        <a href="#" className="block text-sm hover:underline">
          Education/Academics
        </a>
        <a href="#" className="block text-sm hover:underline">
          Mining
        </a>
      </div>
    </div>
  );
};

export default Navbar;
