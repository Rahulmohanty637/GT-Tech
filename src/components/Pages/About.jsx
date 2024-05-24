import React from 'react'
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import Popup from "../Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Clients from "../Partners/Clients.jsx"
import HeroSection from '../HeroSection/HeroSection.jsx';
import Aboutus from '../AboutUs/Aboutus.jsx';
import Who from '../Who/Who.jsx';
import Choose from '../Choose/Choose.jsx';
import Partners from '../Choose/Partners.jsx';

const About = () => {

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
            <HeroSection title={"About"} subtitle={"Exploring GramTarang Technologies"}/>
            <Aboutus />
            <Who />
            <Choose/>
            <Partners/>
            <Clients />
        </div>
    )
}

export default About