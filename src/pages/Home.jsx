import React from 'react'
import Banner from '../components/Banner'
import State from '../components/State'
import TrendingApps from '../components/TrendingApps'
import useFetchApp from '../hooks/useFetchApps'
import Loader from '../components/Loader'
import Error from './Error'

const Home = () => {
  
  const { apps, loading, error } = useFetchApp()
  
  
  
  return (
    <>
      <Banner></Banner>
      <State></State>
      {loading? <Loader></Loader> : error|| apps?.length <=0 ? <Error></Error> : <TrendingApps apps={apps}></TrendingApps>}
      
    </>
    
    
  )
}

export default Home