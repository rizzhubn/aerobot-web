import React from 'react'
import SubHeader from '../../components/SubHeader/SubHeader'
import BatterySec from '../../components/BatteryDrone/BatteryDrone'
import BackBattery from '../../components/BackBattery/BackBattery.js/BackBattery'
import BatterySpec from '../../components/BatterySpecs/BatterySpec'
import FAQSection from '../../components/Faq/FAQ'

const BatteryDetail = () => {
  return (
    <>
      <SubHeader/>
      <BackBattery/>
      <BatterySec/>
      <BatterySpec/>
      <FAQSection/>
    </>
  )
}


export default BatteryDetail