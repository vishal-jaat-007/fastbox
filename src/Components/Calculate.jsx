import React from 'react'
import Slider from "react-slick";
import Greenbtn from "./Greenbtn"
import { Container, Row, Col } from 'react-bootstrap';
import calculate_img from "../assets/image/png/man_calculate.png"
import calender from "../assets/image/png/calender.png"
import booking_date from "../assets//image/png/bookingdate.png"
import parcel from "../assets/image/png/parcel.png"
import loction from "../assets/image/png/location.png"
import calculate_men from "../assets/image/png/calculate_men.png"
export const Calculate = () => {

    return (

        <Container className='pt-5'>
            <div className=' box_green_style pe-5 ps-5 pt-5 '>
                <Row className='pt-4 pb-5 pb-lg-0'>
                    <Col xs={12} lg={6} className='pb-5 pb-lg-0'>
                        <p className=' ff_any_body fw_700 fs_48 green'>Calculate your price</p>
                        <p className='fw_400 fs_22 ff_display lightgrey pb-2'>Duis aute irure dolor in reprehenderit in voluptate <br></br> cillum dolore eu fugiat nulla pariatur.</p>
                        <img className='pt-5 w-100' src={calculate_men} alt="" />
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className=' bg-white  p-5 white_box_style'>
                            <div className=' d-flex align-items-center'>
                                <img src={calender} alt="" />
                                <p className=' ff_any_body fs_22 fw_700 darkblack ps-4 mb-0'>Booking Date</p>
                            </div>
                            <div className=' d-flex justify-content-between pt-5 pb-2'>
                                {/* <p>Enter Booking date</p> */}
                                <input type="date" placeholder='Enter Booking date' className='input_style fw_500 fs_18 ff_display lightgrey' />
                                <span><img src={booking_date} alt="" /></span>
                            </div>
                            <div className='hr_1'></div>
                            <div className=' d-flex align-items-center pt-5'>
                                <img src={parcel} alt="" />
                                <p className='ff_any_body fs_22 fw_700 darkblack ps-4 mb-0'>Type of Parcel</p>
                            </div>
                            <div className='pt-5'>
                                <form action="/action_page.php">
                                    <div className=' d-flex justify-content-between pb-2 w'>
                                        {/* <label for="parcel" className='fw_500 fs_18 ff_display lightgrey'>Select Parcel type</label> */}
                                        {/* <input type="text" placeholder='Select Parcel type' className='fw_500 fs_18 ff_display lightgrey input_style' /> */}
                                        <select id="parcel_1" name="parcel">
                                            <option value="Select Parcel type">Select Parcel type</option>
                                            <option value="Select Parcel type">Big</option>
                                            <option value="Select Parcel type">Mediem</option>
                                            <option value="Select Parcel type">Small</option>
                                            <option value="Select Parcel type">Very Small</option>
                                        </select>
                                    </div>
                                    <div className='hr_1'></div>
                                </form>
                            </div>
                            <div className=' d-flex pt-5 align-items-center'>
                                <img src={loction} alt="" />
                                <p className=' ff_any_body fs_22 fw_700 darkblack ps-4 mb-0'>Destination</p>
                            </div>
                            <Row className='  justify-content-between pb-5 '>
                                <Col xs={12} xl={6} className='pt-5'>
                                    <form action="/action_page.php">
                                        <div className='pb-2'>
                                            {/* <label for="parcel" className='fw_500 fs_18 ff_display lightgrey'>Select Parcel type</label> */}
                                            {/* <input type="text" placeholder='To' className='fw_500 fs_18 ff_display lightgrey input_style' /> */}
                                            <select id="parcel_2" name="parcel">
                                                <option value="To">To</option>
                                                <option value="To">Khokha</option>
                                                <option value="To">Hisar</option>
                                                <option value="To">Hansi</option>
                                                <option value="To">Barwala</option>
                                            </select>
                                        </div>
                                        <div className='hr_2'></div>
                                    </form>
                                </Col>
                                <Col xs={12} xl={6} className='pt-5'>
                                    <form action="/action_page.php">
                                        <div className='pb-2'>
                                            {/* <label for="parcel" className='fw_500 fs_18 ff_display lightgrey'>Select Parcel type</label> */}
                                            {/* <input type="text" placeholder='From' className='fw_500 fs_18 ff_display lightgrey input_style' /> */}
                                            <select id="parcel_2" name="parcel">
                                                <option value="From">From</option>
                                                <option value="From">Khokha</option>
                                                <option value="From">Hisar</option>
                                                <option value="From">Hansi</option>
                                                <option value="From">Barwala</option>
                                            </select>
                                        </div>
                                        <div className='hr_2'></div>
                                    </form>
                                </Col>
                            </Row>
                            <Greenbtn title="Calculate" />
                        </div>
                    </Col>
                </Row>
            </div >
        </Container>

    )
}
