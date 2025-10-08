import React from 'react'
import Card from './Card';
import { Link } from 'react-router';

const TrendingApps = ({ apps }) => {

    const trendingApps = apps.slice(0,8)

    return (
        <div className='bg-[#D2D2D2] py-10 px-10'>
            <h1 className='text-2xl md:text-4xl font-bold text-center text-[#001931]'>Trending Apps</h1>
            <p className='text-xs md:text-sm text-[#627382] text-center mt-3'>Explore All Trending Apps on the Market developed by us</p>
            <div className='mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {trendingApps.map(app => <Card key={app?.id} app={app}></Card>)}
            </div>
            <div className='flex justify-center'>
                <Link to='/apps'><button className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white mt-10 px-10 py-6">Show All</button></Link>
            </div>
        </div>
    )
}

export default TrendingApps