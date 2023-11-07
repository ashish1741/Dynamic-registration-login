import React from 'react'
import Left from "../components/Left"
import Right from './Right'

function Home() {
  return (
    <div className=' relative top-0 left-0 right-0 '>
         <div className="flex justify-center">
            <div className="p-3">
                <Left />
            </div>
            <div className="p-3">
                <Right />
            </div>
         </div>
    </div>
  )
}

export default Home