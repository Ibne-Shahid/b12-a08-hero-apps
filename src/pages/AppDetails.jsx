import React from 'react'
import { useLoaderData, useParams } from 'react-router'

const AppDetails = () => {

    const { id } = useParams()
    const appId = parseInt(id)
    const apps = useLoaderData()
    const singleApp = apps.find(app => app.id === appId)

    return (
        <div className='bg-[#D2D2D2] p-10'>
            <div className='flex gap-8'>
                <img className='w-[200px] h-[200px]' src={singleApp.image} alt="" />
                <div>
                    <h3 className='text-[#001931] font-bold text-3xl'>{singleApp.title}</h3>
                    <p className='text-[#627382] text-md'>Developed by <span className='text-violet-600'>{singleApp.companyName}</span></p>
                </div>
            </div>
        </div>
    )
}

export default AppDetails