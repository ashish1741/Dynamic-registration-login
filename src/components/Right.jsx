import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Polygon1, Polygon2, briefcase, user } from '../assets';
import Button from '../helper/Button';
import Form from './Form';

function Right() {

  
  return (
    <>
        <div className="p-2 w-[50%] bg-slate-300 rounded-md shadow-slate-500">
          <div className="p-2 mt-3 text-right">
            <h3 className='p-2 text-[#8692A6]'>Already have an account? <span className='text-blue-700 font-bold cursor-pointer'>Sign In</span> </h3>
          </div>
          <div className="mt-16 p-2  ">
            <h1 className='font-bold text-[30px] ml-11'>Join Us!</h1>
            <p className='font-[400] text-[#8692A6] p-2 mt-2 ml-10'>To begin this journey, tell us what type of <br /> account you’d be opening.</p>
          </div>
          <Link to={"/form/individual"}>
            <div className="border shadow-xl mt-9 border-blue-500 p-2 rounded flex justify-evenly w-[60%]">
              <img src={user} alt="" className='relative left-[43px]  ' />
              <img src={Polygon1} className='p-2' alt="indiviuals" />
              <Button  
                title="Individual"
                description="Personal account to manage all your activities."
              />
              <span className='mt-10 text-[30px] text-blue-900' >&#8594;</span>
            </div>
          </Link>
          <Link to={"/form/business"}>
            <div className=" hover:border shadow-xl mt-9 border-blue-500 p-2 rounded flex justify-evenly w-[60%]">
              <img src={briefcase} alt="" className='relative left-[43px]  ' />
              <img src={Polygon2} className='p-2' alt="indiviuals" />
              <Button  
                title="Business"
                description="Own or belong to a company, this is for you."
              />
              <span className='mt-10 text-[30px] text-blue-900' >&#8594;</span>
            </div>
          </Link>
        </div>
      
    </>
  );
}

export default Right;
