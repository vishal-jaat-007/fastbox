import React from 'react'
import Slider from "react-slick";
import Greenbtn from "./Greenbtn"
import { Container, Row, Col } from 'react-bootstrap';
import calculate_img from "../assets/image/png/man_calculate.png"
import calender from "../assets/image/png/calender.png"
export const Calculate = () => {
    return (
        <div className='bg_lightgreen'>
            <Container className='pt-5'>
                <Row>
                    <Col xs={12} md={6}>
                        <p className=' ff_any_body fw_700 fs_48 green'>Calculate your price</p>
                        <p className='fw_400 fs_22 ff_display lightgrey pb-2'>Duis aute irure dolor in reprehenderit in voluptate <br></br> cillum dolore eu fugiat nulla pariatur.</p>
                        <img className='pt-5' src={calculate_img} alt="" />
                    </Col>
                    <Col xs={12} md={6}>
                        <div className=' bg-white p-5'>
                            <div className=' d-flex align-items-center'>
                                <img src={calender} alt="" />
                                <p className=' ff_any_body fs_22 fw_700 darkblack ps-4 '>Booking Date</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
