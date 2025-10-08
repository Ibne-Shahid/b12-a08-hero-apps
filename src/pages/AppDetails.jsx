import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import { BsDownload } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa6';
import { TbFileLike } from 'react-icons/tb';
import Swal from 'sweetalert2'
import RatingChart from '../components/RatingChart';


const AppDetails = () => {
    const [isClicked, setIsClicked] = useState(false)

    const { id } = useParams()
    const appId = parseInt(id)
    const apps = useLoaderData()
    const singleApp = apps.find(app => app.id === appId)

    const handleInstall = () => {
        setIsClicked(true)
        Swal.fire({
            title: "This app is installed!",
            icon: "success"
        });
    }


    return (
        <div className='bg-[#D2D2D2] p-10'>
            <div className='flex gap-8'>
                <img className='w-[150px] h-[150px] md:w-[250px] md:h-[250px]' src={singleApp.image} alt="" />
                <div className='w-5/6'>
                    <h3 className='text-[#001931] font-bold text-xl md:text-3xl'>{singleApp.title}</h3>
                    <p className='text-[#627382] text-md'>Developed by <span className='text-violet-600'>{singleApp.companyName}</span></p>
                    <hr className='text-gray-400 mt-3 w-full hidden md:block' />
                    <button onClick={handleInstall} disabled={isClicked} className="btn btn-accent text-white text-xs md:text-base mt-4 md:hidden">{isClicked ? "Installed" : `Install Now (${singleApp.size} MB)`}</button>
                    <div className='hidden md:block'>
                        <div className='mt-3 flex gap-10'>
                            <div className='space-y-1'>
                                <BsDownload className='text-green-600 w-10 h-10' />
                                <p className='text-[#627382]'>Downloads</p>
                                <p className='text-[#001931] text-2xl font-extrabold'>8M</p>
                            </div>
                            <div className='space-y-1'>
                                <FaStar className='text-orange-500 w-10 h-10' />
                                <p className='text-[#627382]'>Average Ratings</p>
                                <p className='text-[#001931] text-2xl font-extrabold'>4.9</p>
                            </div>
                            <div className='space-y-1'>
                                <TbFileLike className='text-violet-600 w-10 h-10' />
                                <p className='text-[#627382]'>Total Reviews</p>
                                <p className='text-[#001931] text-2xl font-extrabold'>54K</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleInstall} disabled={isClicked} className="btn btn-accent text-white mt-4 hidden md:block">{isClicked ? "Installed" : `Install Now (${singleApp.size} MB)`}</button>
                </div>
            </div>
            <div className='mt-5 grid grid-cols-3 gap-2 text-center md:hidden'>
                <div className='space-y-1'>
                    <BsDownload className='text-green-600 w-10 h-10 mx-auto' />
                    <p className='text-[#627382] text-[8px] md:text-base'>Downloads</p>
                    <p className='text-[#001931] text-2xl font-extrabold'>8M</p>
                </div>
                <div className='space-y-1'>
                    <FaStar className='text-orange-500 w-10 h-10 mx-auto' />
                    <p className='text-[#627382] text-[8px] md:text-base'>Average Ratings</p>
                    <p className='text-[#001931] text-2xl font-extrabold'>4.9</p>
                </div>
                <div className='space-y-1'>
                    <TbFileLike className='text-violet-600 w-10 h-10 mx-auto' />
                    <p className='text-[#627382] text-[8px] md:text-base'>Total Reviews</p>
                    <p className='text-[#001931] text-2xl font-extrabold'>54K</p>
                </div>
            </div>
            <hr className='text-gray-400 my-10 w-full hidden md:block' />
            <RatingChart singleApp={singleApp}></RatingChart>
            <hr className='text-gray-400 my-10 w-full hidden md:block' />
            <div>
                <h3 className='text-[#001931] font-semibold text-xl'>Description</h3>
                <p>{singleApp.description}</p>
            </div>

        </div>

    )
}

export default AppDetails