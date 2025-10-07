import React from 'react'
import Banner from '../components/Banner'
import State from '../components/State'
import TrendingApps from '../components/TrendingApps'
import { useLoaderData } from 'react-router'

const Home = () => {
  const apps = useLoaderData()
  
  return (
    <>
      <Banner></Banner>
      <State></State>
      <TrendingApps apps={apps}></TrendingApps>
    </>
    
    
  )
}

export default Home