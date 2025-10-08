import React from 'react'
import { FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router';

const Error = () => {
  return (
    <div className='py-20 px-2'>
        <FaTimesCircle className='mx-auto h-52 w-52 text-red-700'/>
        <p className='text-5xl text-red-700 text-center font-bold'>404 Page not found!</p>
        <p className='text-center text-[#627382] mt-3'>Sorry, the page you are looking for might be removed, renamed or temporarily unavailable!</p>
        <div className='flex justify-center gap-5'>
            <Link to='/'><button className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white mt-10 px-10 py-6">Back to home</button></Link>
            <Link to='/apps'><button className="btn bg-gradient-to-r from-[#111949] to-[#29396e] text-white mt-10 px-10 py-6">Show All Apps</button></Link>
        </div>
    </div>
  )
}

export default Error