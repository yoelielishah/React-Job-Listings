import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import {ToastContainer} from 'react-toastify' // Importing ToastContainer for notifications
import 'react-toastify/dist/ReactToastify.css' // Importing CSS for ToastContainer

const MainLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <ToastContainer />

  </>
  )
  
}

export default MainLayout