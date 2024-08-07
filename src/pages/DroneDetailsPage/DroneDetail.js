import React from 'react'
import SubHeader from '../../components/SubHeader/SubHeader'
import Marut from '../../components/MarutDrone/Marut'
import ProdSec from '../../components/Product Section/ProdSec'
import DroneVideo from '../../components/DroneVideo/DroneVideo'
import BackDrone from '../../components/BackDrone/BackDrone'
import FAQ from '../../components/FAQ/faq1'
const DroneDetail = () => {
  return (
    <>
      <SubHeader/>
      <BackDrone/>
      <Marut/>
      <ProdSec/>
      <DroneVideo/>
      <FAQ/>
    </>
  )
}


export default DroneDetail