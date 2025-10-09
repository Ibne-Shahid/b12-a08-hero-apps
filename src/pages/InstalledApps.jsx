import React, { useEffect, useState } from 'react'
import useFetchApp from '../hooks/useFetchApps'
import { getItem, removeItems } from '../hooks/localStorage'
import InsApps from '../components/InsApps'
import Loader from '../components/Loader'
import AppError from './AppError'
import Swal from 'sweetalert2'

const InstalledApps = () => {
  const { apps, loading, error } = useFetchApp()
  const [installedAppsData, setInstalledAppsData] = useState([])
  const [sortOrder, setSortOrder] = useState('High')

  useEffect(() => {
    if (!loading && apps.length > 0) {
      const installIds = getItem()
      const installedApps = apps.filter(app => installIds.includes(String(app.id)))

      installedApps.sort((a, b) => {
        if (sortOrder === 'High') {
          return b?.downloadsNum - a?.downloadsNum
        } else {
          return a?.downloadsNum - b?.downloadsNum
        }
      })

      setInstalledAppsData(installedApps)
    }
  }, [loading, apps, sortOrder])

  const handleUnInstall = (id) => {

    removeItems(id)
    Swal.fire({
      title: "This App Is Uninstalled!",
      icon: "success"
    });
    setInstalledAppsData(appsData => appsData.filter(data => data.id !== id))

  }


  return (
    <div className='bg-[#F1F5E8] px-3 py-5 md:p-10'>
      <h1 className='text-[#001931] font-bold text-4xl lg:text-5xl text-center'>Your Installed Apps</h1>
      <p className='text-[#627382] text-center mt-3 text-sm md:text-base'>Explore All Trending Apps on the Market developed by us</p>
      <div className='flex justify-between items-center mt-8'>
        <p className='mt-5 text-lg font-semibold'>({installedAppsData.length}) Apps Found</p>
        <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} className='border border-gray-400 p-2 rounded-md'>
          <option value='High'>High To Low</option>
          <option value='Low'>Low To High</option>
        </select>
      </div>

      {loading ? <Loader></Loader> : error ? <AppError></AppError> : installedAppsData.map(app => <InsApps key={app?.id} app={app} handleUnInstall={handleUnInstall}></InsApps>)}

    </div>
  )
}

export default InstalledApps