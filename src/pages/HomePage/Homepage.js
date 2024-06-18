import React from 'react'
import Categories from '../../components/Category Section/Category'
import Drone from '../../components/Drone/Drone'
import Battery from '../../components/Battery Section/BatterySection'
import Propeller from '../../components/Propeller/propeller'
import Camera from '../../components/Camera Section/Camera'
import Controller from '../../components/Controllersec/Controller'

const Home = () => {
  return (
    <>
        <Categories/>
        <Drone/>
        <Battery/>
        <Propeller/>
        <Camera/>
        <Controller/>
    </>
  )
}

export default Home