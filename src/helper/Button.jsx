import React from 'react'

function Button({title , description}) {
 
  return (

    <div className=" p-3  text-left" >
     <h1 className='font-[500] text-black p-2 text-[16px]'>{title}</h1>
     <p className='text-[#8692A6] font-[400] text-[14px] p-2'> {description}</p>
    </div>
    // <>
    // <p>Personal account to manage all you activities.</p>
    // </>
   
  )
}

export default Button