import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import booking from '../assets/image/png//booking.png'
import packing from '../assets/image/png//packing.png'
import transporation from '../assets/image/png//transporation.png'
import delivery from '../assets/image/png//delivery.png'
import Slider from "react-slick";



const Booking = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
         responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    };

    return (
        <div className="container_my mt-5 pt-5 py-5">
            <Slider {...settings}>
                <div className='border_right'>
                    <div className=' text-center d-flex align-items-center flex-column'>
                        <img className=' ' src={booking} alt="" />
                        <p className=' ff_poppins fw_600 fs-16 lightgrey pt-5'>Step 1</p>
                        <p className=' ff_any_body fw_700 fs_22 green pt-4'>Booking </p>
                        <p className='fw_400 fs_18 fw_400 lightgrey  ff_red_text max_width_314'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
                <div className='border_right'>
                    <div className=' text-center d-flex align-items-center flex-column'>
                        <img className=' ' src={packing} alt="" />
                        <p className=' ff_poppins fw_600 fs-16 lightgrey pt-5'>Step 2</p>
                        <p className=' ff_any_body fw_700 fs_22 green pt-4'>Packing   </p>
                        <p className='fw_400 fs_18 fw_400 lightgrey  ff_red_text max_width_314'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
                <div className='border_right'>
                    <div className=' text-center d-flex align-items-center flex-column'>
                        <img className=' ' src={transporation} alt="" />
                        <p className=' ff_poppins fw_600 fs-16 lightgrey pt-5'>Step 3</p>
                        <p className=' ff_any_body fw_700 fs_22 green pt-4'>Transportation  </p>
                        <p className='fw_400 fs_18 fw_400 lightgrey  ff_red_text max_width_314'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
                <div className=''>
                    <div className=' text-center d-flex align-items-center flex-column'>
                        <img className=' ' src={delivery} alt="" />
                        <p className=' ff_poppins fw_600 fs-16 lightgrey pt-5'>Step 4</p>
                        <p className=' ff_any_body fw_700 fs_22 green pt-4'>Delivery  </p>
                        <p className='fw_400 fs_18 fw_400 lightgrey  ff_red_text max_width_314'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
            </Slider>
        </div>

    )
}

export default Booking