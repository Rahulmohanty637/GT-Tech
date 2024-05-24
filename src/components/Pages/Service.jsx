import React from 'react';
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import Popup from "../Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from '../HeroSection/HeroSection.jsx';
import ConsultingServices from '../ServiceComponent/ConsultingServices.jsx';
import StrategicOutsourcingService from '../ServiceComponent/StrategicOutsourcingService.jsx';
import Cards from '../ServiceComponent/Cards.jsx';

const Service = () => {

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
            <HeroSection title={"Service"} subtitle={"Empowering Industries with Cutting-Edge Technology:Your Partner in Industry 4.0 Solutions and Digital Transformation"}/>
            <ConsultingServices />
            <StrategicOutsourcingService />
            <Cards />
        </div>
    )
}

export default Service