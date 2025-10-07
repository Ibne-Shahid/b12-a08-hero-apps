import React from 'react'

const State = () => {
  return (
    <div className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-center text-white py-10'>
        <h1 className='text-2xl md:text-4xl font-bold'>Trusted by Millions, Built for You</h1>
        <div className='flex justify-around px-4 md:px-24 lg:px-32 mt-6'>
            <div className='space-y-3'>
                <p className='text-xs md:text-sm'>Total Downloads</p>
                <p className='font-extrabold text-4xl md:text-6xl'>29.6M</p>
                <p className='text-xs md:text-sm'>21% more than last month</p>
            </div>
            <div className='space-y-3'>
                <p className='text-xs md:text-sm'>Total Reviews</p>
                <p className='font-extrabold text-4xl md:text-6xl'>906K</p>
                <p className='text-xs md:text-sm'>46% more than last month</p>
            </div>
            <div className='space-y-3'>
                <p className='text-xs md:text-sm'>Active Apps</p>
                <p className='font-extrabold text-4xl md:text-6xl'>132+</p>
                <p className='text-xs md:text-sm'>31 more will Launch</p>
            </div>
        </div>
    </div>
  )
}

export default State