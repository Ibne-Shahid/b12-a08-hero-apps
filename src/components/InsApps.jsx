import React from 'react'
import { BsDownload } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';

const InsApps = ({ app, handleUnInstall }) => {
    return (
        <div className='mt-5'>
    
            <div className='bg-white p-4 rounded-md flex justify-between items-center'>
                <div className='flex gap-4'>
                    <img className='w-20 h-20' src={app?.image} alt="" />
                    <div className='flex flex-col justify-center gap-2'>
                        <p className='font-semibold'>{app?.title}</p>
                        <div className='flex gap-3 items-center'>
                            <p className='text-green-600 flex items-center gap-1 text-xs'><BsDownload/> {app?.downloads}</p>
                            <p className='text-orange-600 flex items-center gap-1 text-xs'><FaStar/> {app?.ratingAvg}</p>
                            <p className='text-gray-600 flex items-center gap-1 text-xs'>{app?.size}MB</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={()=>handleUnInstall(app?.id)} className="btn btn-accent text-white text-xs md:text-base">Uninstall</button>
                </div>
            </div>
        </div>
    )
}

export default InsApps