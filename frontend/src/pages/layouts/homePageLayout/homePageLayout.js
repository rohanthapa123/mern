import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar, Footerlayout } from '../../../components/home/home.component'

const HomePageLayout = () => {
  return (
    <>
    <NavBar opt1="login" opt2="register" opt3="MyAccount" link1="/login" link2="/register" link3="/customer" />
    <Outlet/>
    <Footerlayout/>
    </>
  )
}

export default HomePageLayout