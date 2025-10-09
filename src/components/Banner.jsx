import React from 'react'
import AppStoreImg from '../assets/fi_5977575.png'
import GooglePlayImg from '../assets/fi_16076057.png'
import BannerImg from '../assets/hero.png'

const Banner = () => {
  return (
    <div className='bg-[#F1F5E8] pt-5 px-10 md:pt-15 md:px-15'>
        <div className='text-center'>
            <h1 className='text-4xl lg:text-5xl font-bold text-[#001931]'>We Build <br /> <span className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text'>Productive</span> Apps</h1>
            <p className='lg:px-56 mt-3 text-[#627382] text-sm md:text-base'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='space-x-5 mt-5'>
                <a href='https://play.google.com/store/games?hl=en' target='_blank' className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-transparent border-[#627382] rounded-lg text-[#001931] py-5 px-3"> <img src={GooglePlayImg} alt="" /> Google Play</a>
                <a href='https://www.apple.com/app-store/' target='_blank' className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-transparent border-[#627382] rounded-lg text-[#001931] py-5 px-3"> <img src={AppStoreImg} alt="" /> App Store</a>
            </div>
        </div>
        <div className='mt-5 w-full'>
            <img className='mx-auto' src={BannerImg} alt="" />
        </div>
    </div>
  )
}

export default Banner