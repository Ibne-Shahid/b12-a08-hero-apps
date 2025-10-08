import React, { useState } from 'react'
import { useLoaderData } from 'react-router';
import Card from '../components/Card';
import NoApps from '../components/NoApps';

const AllApps = () => {
  const apps = useLoaderData()
  const [search, setSearch] = useState('')

  const term = search.trim().toLowerCase()
  const searchedApps = term ? apps.filter(app => app.title.toLowerCase().includes(term)) : apps

  return (
    <div className='bg-[#D2D2D2] py-10 px-10'>
      <h1 className='text-[#001931] font-bold text-4xl lg:text-5xl text-center'>Our All Applications</h1>
      <p className='text-[#627382] text-center mt-3 text-sm md:text-base'>Explore All Apps on the Market developed by us. We code for Millions</p>
      <div className='mt-5 flex flex-col-reverse md:flex-row justify-between items-center'>
        <p className='text-[#001931] font-semibold text-xl mt-3 md:mt-0'>({searchedApps.length}) Apps Found</p>
        <input value={search} onChange={e => setSearch(e.target.value)} type="search" placeholder="Search Apps" className="input input-md" />
      </div>
      <div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {searchedApps.length > 0 ?
          searchedApps.map(app => <Card key={app.id} app={app}></Card>) :
          ''
        }
      </div>
      <NoApps></NoApps>
    </div>
  )
}

export default AllApps