import React from 'react'
import Navbar from "../Navbar/Navbar.jsx";
import Hero from "../Hero/Hero.jsx";
import Services from "../Services/Services.jsx";
import Footer from "../Footer/Footer.jsx";
import Popup from "../Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Portfolio from "../Portfolio/Portfolio.jsx";
import Dassault from "../Partners/Dassault.jsx";
import AMS from "../Partners/AMS.jsx";
import Testimonials from "../Testimonial/Testimonial.jsx";
import Clients from "../Partners/Clients.jsx"

const Home = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Hero />
      <Services />
      <Portfolio/>
      <Dassault/>
      <AMS/>
      <Testimonials/>
      <Clients />
    </div>
  )
}

export default Home;