import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Dassault from "./components/Partners/Dassault.jsx";
import AMS from "./components/Partners/AMS.jsx";
import Testimonials from "./components/Testimonial/Testimonial.jsx";
import Clients from "./components/Partners/Clients.jsx"
import Home from "./components/Pages/Home.jsx";
import About from "./components/Pages/About.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Choose from "./components/Choose/Choose.jsx";



const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

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
  //  <Home/>
   <About/>

  );
};

export default App;
