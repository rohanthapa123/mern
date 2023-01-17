import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../../../components/home/home.component'

const CustomerLayout = () => {
  return (
    <>
    <NavBar opt1="orders" opt2="history" link1="order" link2="order/history"/>
    <Outlet/>
    </>
  )
}

export default CustomerLayout