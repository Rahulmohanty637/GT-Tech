import React from 'react';
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import Popup from "../Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from '../HeroSection/HeroSection.jsx';
import ConsultingServices from '../ServiceComponent/ConsultingServices.jsx';
import StrategicOutsourcingService from '../ServiceComponent/StrategicOutsourcingService.jsx';

const Service = () => {
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
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
            <Navbar handleOrderPopup={handleOrderPopup} />
            <HeroSection title={"Service"} subtitle={"hgsdufkluh"}/>
            <ConsultingServices/>
            <StrategicOutsourcingService/>
            <Footer />
            <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
        </div>
    )
}

export default Service