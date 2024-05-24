import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Pages/Home.jsx";
import About from "./components/Pages/About.jsx";
import Service from "./components/Pages/Service.jsx";
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

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
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
