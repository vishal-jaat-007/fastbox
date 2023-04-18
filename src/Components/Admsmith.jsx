import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import adamsmith from '../assets/image/png/adamsmith.png'
import sofia from '../assets/image/png/sofia.png'
import marfia from '../assets/image/png/matfie.png'
import arrow from '../assets/image/png/arrow.png'
import vector from '../assets/image/png/Vector.png'
import star from '../assets/image/png/star.png'
export const Admsmith = () => {
  return (
    <Container className='pt-5 pb-5'>
      <div className=' text-center'>
        <p className='fw_700 fs_48 ff_any_body green pt-5'>What our Clients Say</p>
        <p className='fw_400 fs_22 ff_display lightgrey '>Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <Row className='pt-5 '>
        <Col xs={12} lg={3} className='pe-0'>
          <div className='lightgrey_box d-flex align-items-center p-3 justify-content-between hover_person'>
            <img src={adamsmith} alt="" />
            <p className='fw_700 fs_22 ff_any_body mb-0'>Adam Smith</p>
            <span>   <img src={arrow} alt="" /></span>
          </div>
          <div className='lightgrey_box d-flex align-items-center p-3 justify-content-between hover_person mt-3'>
            <img src={sofia} alt="" />
            <p className='fw_700 fs_22 ff_any_body mb-0'>Sofia Caralino</p>
            <span>   <img src={arrow} alt="" /></span>
          </div>
          <div className='lightgrey_box d-flex align-items-center p-3 justify-content-between hover_person mt-3'>
            <img src={marfia} alt="" />
            <p className='fw_700 fs_22 ff_any_body mb-0'>Marfie Motcast</p>
            <span>   <img src={arrow} alt="" /></span>
          </div>
        </Col>
        <Col xs={12} lg={9} className='ps-0'>
          <div className='lightgrey_box_2 pt-4 mt-3 mt-lg-0 pb-4 p-4 text-center'>
            <img className='pt-3' src={vector} alt="" />
            <p className='fw_400 fs_22 ff_display lightgrey pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <p className='fw_700 fs_22 ff_any_body green pt-4 '>Web Developer</p>
              <img className='pb-3' src={star} alt="" />
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
