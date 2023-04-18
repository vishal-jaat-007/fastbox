import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Greenbtn from './Greenbtn';
import worldmap from '../assets/image/png/world_map.png'
export const Via_gps = () => {
  return (
    <div className='position-relative'>
      <Container className='pt-5 pb-5'>
        <Row>
          <Col xs={12} xl={7}>
            <div>
              <p className='fw_700 fs_45 ff_any_body green'>Follow your shipment via GPS</p>
              <p className='fw_400 fs_22 ff_display pb-5 lightgrey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate..</p>
              <Greenbtn title="Learn More" />
            </div>
          </Col>
          <Col xs={12} xl={5}>
         
              <img className='position-absolute end-0 img-fl uid w_xl_40 d-none d-xl-block' src={worldmap} alt="" />
          
            <img className='d-xl-none img-fluid' src={worldmap} alt="" />
          </Col>
        </Row>
      </Container></div>
  )
}

export default Via_gps
