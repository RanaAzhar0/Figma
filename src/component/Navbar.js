import React from 'react'
import Img from "../images/image1.png"

const Navbar = () => {
  return (
    <>
    <div className='h-20 w-[100%] flex justify-between  items-center'>
      <div className=' h-16 w-16 ml-14'>
        <img src={Img} className="h-16 w-16"/>
      </div>
      <div className=' h-20 w-[65vh]  mr-14 flex items-center justify-evenly'>
        <p className='text-[#635EA3] text-sm'>Options 1</p>
        <p className='text-[#635EA3] text-sm'>Options 2</p>
        <button className='CreateProfile py-1 px-4 rounded-md text-[#635EA3]'>Create Profile</button>
        <button className='Employer py-1.5 px-5 rounded-md text-white bg-[#635EA3]'>Employer</button>


      </div>

    </div>
    
    </>
  )
}

export default Navbar