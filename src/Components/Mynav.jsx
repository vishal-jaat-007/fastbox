import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import navlogo from '../assets/image/png//nav_logo.png'
import navposition from '../assets/image/png//nav_first_position.png'



const Mynav = () => {
    return (
        <div>
            <img className=' position-absolute' src={navposition} alt="" />

            <Container className='container_my position-relative py-4'>
                <nav className=' d-flex justify-content-between align-items-center'>
                    <div>
                        <img className='' src={navlogo} alt="" />
                    </div>
                    <input type="checkbox" id='check' className='d-none' />
                    <label htmlFor="check" className=' d-block d-lg-none'>
                        <span class="d-flex justify-content-between flex-column  ">
                            <span class="nav_3_line"></span>
                            <span class="nav_3_line"></span>
                            <span class="nav_3_line"></span>
                        </span>
                    </label>
                    <ul className=' d-flex  align-items-center nav_left '>
                        <li><a className=' fw_400 ff_red_text fs_20 grey  me-lg-5' href="#">Home</a></li>
                        <li><a className=' fw_400 ff_red_text fs_20 grey  me-lg-5' href="#">Tracking</a></li>
                        <li><a className=' fw_400 ff_red_text fs_20 grey  me-lg-5' href="#">Shipping</a></li>
                        <li><a className=' fw_400 ff_red_text fs_20 grey  me-lg-5' href="#">Locations</a></li>
                        <li><a className=' fw_400 ff_red_text fs_20 grey  me-lg-5' href="#">Support</a></li>
                        <li><a href="#" className='fw_400 fs_20 ff_red_text grey  d-block d-lg-none'>Signin</a></li>

                    </ul>
                    <ul>
                        <li><a href="#" className='fw_400 fs_20 ff_red_text grey d-none  d-lg-block'>Signin</a></li></ul>

                </nav>
            </Container>
        </div>
    )
}

export default Mynav