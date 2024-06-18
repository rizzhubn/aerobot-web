import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from '../components/Layoutss/Layout'
import Home from '../pages/HomePage/Homepage'
import DroneDetail from '../pages/DroneDetailsPage/DroneDetail' 
const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/' element={<Layout/>} >
            <Route path='/' element={<Home/>} />
            <Route path='/drone-details' element={<DroneDetail/>} />
        </Route>
        </>
    )
)

const Mainrouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Mainrouter