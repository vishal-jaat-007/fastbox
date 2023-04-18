import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import navlogo from '../assets/image/png//nav_logo.png'
import navposition from '../assets/image/png//nav_first_position.png'
import heroshadow from '../assets/image/png//hero_shadow.png'
import Greenbtn from './Greenbtn';



const Mynav = () => {
    return (
        <div className=' overflow-hidden'>
            <img className=' position-absolute d-none  d-md-block' src={navposition} alt="" />
            <img className=' position-absolute end-0 ' src={heroshadow} alt="" />

            <div className='container_my position-relative py-4'>
                <nav className=' d-flex justify-content-between align-items-center'>
                    <div>
                        <img className='w-75' src={navlogo} alt="" />
                    </div>
                    <input type="checkbox" id='check' className='d-none' />
                    <label htmlFor="check" className=' d-block d-xl-none'>
                        <span class="d-flex justify-content-between flex-column  ">
                            <span class="nav_3_line"></span>
                            <span class="nav_3_line"></span>
                            <span class="nav_3_line"></span>
                        </span>
                    </label>
                    <ul className=' d-flex  align-items-center nav_left mb-0'>
                        <li><a className=' fw_400 ff_red_text fs_20 grey  me-xl-5' href="#">Home</a></li>
                        <li><a className=' fw_400 ff_red_text fs_20 grey  me-xl-5' href="#">Tracking</a></li>
                        <li><a className=' fw_400 ff_red_text fs_20 grey  me-xl-5' href="#">Shipping</a></li>
                        <li><a className=' fw_400 ff_red_text fs_20 grey  me-xl-5' href="#">Support</a></li>
                        <li><a className=' fw_400 ff_red_text fs_20 grey  me-xl-5' href="#">Locations</a></li>
                        <li className='mb-0'><a href="#" className='fw_400 fs_20 ff_red_text grey  d-block d-xl-none'>Signin</a></li>
                        <span className=' d-block d-xl-none'><Greenbtn title="Register" btn="register" />  </span>
                    </ul>
                    <ul className='d-flex'>
                        <ul className='mb-0 d-flex  align-items-center'>
                            <li><a href="#" className='fw_400 fs_20 ff_red_text grey d-none  d-xl-block pe-5'>Signin</a></li></ul>
                        <span className='d-none  d-xl-block'><Greenbtn title="Register" btn="register" /></span>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Mynav