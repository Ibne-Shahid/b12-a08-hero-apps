import React from 'react'
import { BsDownload } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa6';
import { TbFileLike } from 'react-icons/tb';
import RatingChart from './RatingChart';

const AppDetailsComponent = ({ app, handleInstall, isClicked }) => {
    return (
        <div>
            <div className='bg-[#F1F5E8] px-3 py-5 md:p-10'>
                <div className='flex gap-8'>
                    <img className='w-[150px] h-[150px] md:w-[250px] md:h-[250px]' src={app?.image} alt="" />
                    <div className='md:w-5/6'>
                        <h3 className='text-[#001931] font-bold text-3xl'>{app?.title}</h3>
                        <p className='text-[#627382] text-md'>Developed by <span className='text-violet-600'>{app?.companyName}</span></p>
                        <hr className='text-gray-400 mt-3 w-full hidden md:block' />
                        <button onClick={()=>handleInstall(app?.id)} disabled={isClicked} className="btn btn-accent text-white text-xs md:text-base mt-4 md:hidden">{isClicked ? "Installed" : `Install Now (${app?.size} MB)`}</button>
                        <div className='hidden md:block'>
                            <div className='mt-3 flex gap-10'>
                                <div className='space-y-1'>
                                    <BsDownload className='text-green-600 w-10 h-10' />
                                    <p className='text-[#627382]'>Downloads</p>
                                    <p className='text-[#001931] text-2xl font-extrabold'>{app?.downloads}</p>
                                </div>
                                <div className='space-y-1'>
                                    <FaStar className='text-orange-500 w-10 h-10' />
                                    <p className='text-[#627382]'>Average Ratings</p>
                                    <p className='text-[#001931] text-2xl font-extrabold'>{app?.ratingAvg}</p>
                                </div>
                                <div className='space-y-1'>
                                    <TbFileLike className='text-violet-600 w-10 h-10' />
                                    <p className='text-[#627382]'>Total Reviews</p>
                                    <p className='text-[#001931] text-2xl font-extrabold'>{app?.reviews}</p>
                                </div>
                            </div>
                        </div>
                        <button onClick={()=>handleInstall(app?.id)} disabled={isClicked} className="btn btn-accent text-white mt-4 hidden md:block">{isClicked ? "Installed" : `Install Now (${app?.size} MB)`}</button>
                    </div>
                </div>
                <div className='mt-5 grid grid-cols-3 gap-2 text-center md:hidden'>
                    <div className='space-y-1'>
                        <BsDownload className='text-green-600 w-10 h-10 mx-auto' />
                        <p className='text-[#627382] text-xs'>Downloads</p>
                        <p className='text-[#001931] text-2xl font-extrabold'>{app?.downloads}</p>
                    </div>
                    <div className='space-y-1'>
                        <FaStar className='text-orange-500 w-10 h-10 mx-auto' />
                        <p className='text-[#627382] text-xs'>Average Ratings</p>
                        <p className='text-[#001931] text-2xl font-extrabold'>{app?.ratingAvg}</p>
                    </div>
                    <div className='space-y-1'>
                        <TbFileLike className='text-violet-600 w-10 h-10 mx-auto' />
                        <p className='text-[#627382] text-xs'>Total Reviews</p>
                        <p className='text-[#001931] text-2xl font-extrabold'>{app?.reviews}</p>
                    </div>
                </div>
                <hr className='text-gray-400 my-10 w-full hidden md:block' />
                <RatingChart app={app}></RatingChart>
                <hr className='text-gray-400 my-10 w-full hidden md:block' />
            <div>
                <h3 className='text-[#001931] font-semibold text-xl'>Description</h3>
                {app?.description}
            </div>
            </div>
        </div>
    )
}

export default AppDetailsComponent