import React from 'react'
import { Group, Union, Vector,Vecto1} from "../assets/index"
function Left() {
  return (
    <div className=" w-[50%] p-5 h-full relative block bg-blue-900 rounded-md shadow-2xl shadow-blue-600  ">
        <div className="logo p-3  text-center flex ">
            <img src={Union} alt="" srcset="" />
            <h3 className='mt-6 ml-2 text-white font-bolder to-slate-500'>Oasis.</h3>

        </div>
        <div className="img text-right flex justify-center ml-32 ">

            <img src={Group} alt="" className='p-2' />
            <img src={Group} alt="" className='p-2' />
            <img src={Group} alt="" className='p-2' />
            <img src={Group} alt="" className='p-2' />
            

        </div>
        <div className="intro p-2 mt-2 mb-5 ">
            <h1 className='text-[40px] font-extrabold ml-10 text-green-600'>&ldquo;</h1>
            <h1 className='text-white p-3 text-[24px] font-[400] ml-10  '>The passage experienced a surge in popularity <br /> during the 1960s when Letraset used it on their <br /> dry-transfer sheets, and again during the 90s as <br /> desktop publishers bundled the text with their <br /> software.</h1>
            <span className='text-white p-2 font-bold  ml-10 mt-10'>Vincent Obi  &#x2713;</span>
        </div>
        <div className="p-2 relative left-[500px] ml-14">
            <img src={Vector} alt="icon"  />

        </div>
        <div className="relative  left-[-15px] top-5 ">
            <img src={Vecto1} alt="ring"  />

        </div>


    </div>
  )
}

export default Left