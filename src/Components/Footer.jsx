import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import fastbox from '../assets/image/png/fatbox.png'
import icon_1 from '../assets/image/png/icon_1.png'
import phn from '../assets/image/png/phn.png'
import location_icon from '../assets/image/png/location_icon.png'
import mail from '../assets/image/png/mail.png'

export const Footer = () => {
    return (
        <Container className='pt-5 pb-5'>
            <Row>
                <Col sm={12} md={4} className='doted_border_right'>
                    <div>
                        <img src={icon_1} alt="" />
                        <img className='ps-4' src={fastbox} alt="" />
                        <p className='fw_400 fs_18 ff_display lightgrey pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..</p>
                    </div>
                </Col>
                <Col sm={12} md={8}>
                    <Row>
                        <Col sm={4} className=' text-center doted_border_right'>
                            <p className='fw_700 fs_22 ff_any_body green '>Quick link</p>
                            <p className='fw_400 fs_18 ff_display lightgrey  pt-5'>Tracking</p>
                            <p className='fw_400 fs_18 ff_display lightgrey'>Shipping</p>
                            <p className='fw_400 fs_18 ff_display lightgrey'>Locations</p>
                            <p className='fw_400 fs_18 ff_display lightgrey'>Support</p>
                        </Col>
                        <Col sm={4}>
                            <div className='doted_border_right '>
                                <p className='fw_700 fs_22 ff_any_body green'>Contact us</p>
                                <div className=' d-flex pt-5'>
                                    <span><img src={phn} alt="" /></span>
                                    <p className='fw_400 fs_18 ff_display lightgrey ps-4'>(209) 555-0104</p>
                                </div>
                                <div className=' d-flex pt-3'>
                                    <span><img src={mail} alt="" /></span>
                                    <p className='fw_400 fs_16 ff_display lightgrey ps-4'>michelle.rivera@example.com</p>
                                </div>
                                <div className=' d-flex pt-3'>
                                    <span><img src={location_icon} alt="" /></span>
                                    <p className='fw_400 fs_16 ff_display lightgrey ps-4'>2715 Ash Dr. San Jose, South Dakota 83475</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <p className='fw_700 fs_22 ff_any_body green pb-2'>Subscribe</p>
                            <input className='input_style pt-5' type="text" placeholder='Name' />
                            <div className='border_bottom pt-2'></div>
                            <input className='input_style pt-5' type="text" placeholder='Email' />
                            <div className='border_bottom pt-2'></div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
