import React from 'react'
import Left from './Left'
import Right from './Right'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <div className="relative w-[90%] m-4 bg-slate-300 shadow-2xl shadow-gray-400 h-[80%]  top-4 left-12  bottom-3  flex gap-3 justify-center rounded  ">
        <Left />
        <Right />
        <Outlet />
    </div>

  )
}

export default Layout