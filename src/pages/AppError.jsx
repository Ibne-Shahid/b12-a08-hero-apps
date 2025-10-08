import React from 'react'
import { IoTrashBinSharp } from 'react-icons/io5';
import { Link } from 'react-router';

const AppError = () => {
  return (
    <div className='py-20 px-2'>
        <IoTrashBinSharp className='mx-auto h-52 w-52 text-red-700'/>
        <p className='text-5xl text-red-700 text-center font-bold'>App Not Found</p>
        <p className='text-center text-[#627382] mt-3'>The app you are looking for doesn't exist or has been removed!</p>
        <div className='flex justify-center gap-5'>
            <Link to='/'><button className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white mt-10 px-10 py-6">Back to home</button></Link>
            <Link to='/apps'><button className="btn bg-gradient-to-r from-[#111949] to-[#29396e] text-white mt-10 px-10 py-6">Show All Apps</button></Link>
        </div>
    </div>
  )
}

export default AppError