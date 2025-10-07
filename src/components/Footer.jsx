import React from 'react'
import Logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-[#001931] text-white p-10">
            <aside>
                <img className='h-24 w-24' src={Logo} alt="" />
                <p>
                    <span className='font-bold'>HERO.IO</span>
                    <br />
                    Reliable place for digital applications.
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Explore</h6>
                <a className="link link-hover">Download Center</a>
                <a className="link link-hover">App Collections</a>
                <a className="link link-hover">Trending Apps</a>
                <a className="link link-hover">New Releases</a>
                <a className="link link-hover">Top Categories</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Contact Us</a>
                <a className="link link-hover">Our Mission</a>
                <a className="link link-hover">Career</a>
                <a className="link link-hover">Blog</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
                <a className="link link-hover">DMCA Notice</a>
            </nav>
        </footer>
    )
}

export default Footer