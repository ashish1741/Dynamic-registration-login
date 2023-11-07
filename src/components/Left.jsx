import React from 'react'
import { Union } from '../assets'


function Left() {
  const divStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1602521716590-4667d0574602?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFsbCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width:"50%",
    height:"25%",
    position: 'relative',
  }


  return (
    <div className="realtive " style={divStyle}  >
      <div className="logo   justify-evenly">
      </div>

    </div>
  )
}



export default Left;