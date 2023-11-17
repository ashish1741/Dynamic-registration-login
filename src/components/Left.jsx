import React from 'react'
import { Group, Union, } from "../assets/index"
function Left() {
  return (
    <div className=" w-[50%] h-full relative block bg-blue-900 textc  ">
        <div className="logo p-3  text-center flex ">
            <img src={Union} alt="" srcset="" />
            <h3 className='mt-6 ml-2 text-white font-bolder'>Oasis.</h3>

        </div>
        <div className="img text-right flex justify-center ">

            <img src={Group} alt="" className='p-2' />
            <img src={Group} alt="" className='p-2' />
            <img src={Group} alt="" className='p-2' />
            <img src={Group} alt="" className='p-2' />
            

        </div>
        <div className="intro">
            <h1></h1>
            <h1 className='text-white p-2 font-[400]'>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.</h1>
            <span className='text-white p-2 font-bold'>Vincent Obi  &#x2713;</span>
        </div>

    </div>
  )
}

export default Left