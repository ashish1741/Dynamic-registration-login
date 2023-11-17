import React from 'react'
import Left from './Left'
import Right from './Right'


function Layout() {
  return (
    <div className="relative w-[90%] m-4 p-4 bg-slate-700 h-[80%]  top-4 left-12  bottom-3  flex gap-3 justify-center rounded  ">
        <Left />
        <Right />
        


    </div>

  )
}

export default Layout