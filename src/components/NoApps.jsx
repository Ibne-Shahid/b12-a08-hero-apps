import React from 'react'
import NoData from '../assets/not-data-found.webp'

const NoApps = () => {
  return (
    <div className='mt-10'>
        <p className='text-center text-red-500 font-semibold text-4xl'>No App Found</p>
        <div className='w-full flex justify-center mt-3'>
          <img className='w-[300px] h-[300px]' src={NoData} alt="" />
        </div>
    </div>
  )
}

export default NoApps