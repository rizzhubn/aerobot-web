import React from 'react';
import SubHeader from "../../components/SubHeader/SubHeader";
import HeaderLink from "../../components/BackBattery/BackBattery/BackBattery";
import BatterySection from "../../components/BatteryDrone/BatteryDrone";
import BatterySpecifications from "../../components/BatterySpecs/BatterySpec";
import FAQ from '../../components/FAQ/faq1';


const BatteryDetails = () => {
    
return (
        <>
            <SubHeader/>
            <HeaderLink />
            <BatterySection/>
            <BatterySpecifications/>
            <FAQ/>
        </>
    )
}

export default BatteryDetails