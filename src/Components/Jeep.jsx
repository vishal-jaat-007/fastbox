import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import jeep from '../assets/image/png//jeep.png'
import jeep_shadow from '../assets/image/png//jeep_shadow.png'
import shadow_2 from '../assets/image/png//shadow_2.png'
import yellowstar from '../assets/image/png//yellow_star.png'
import Greenbtn from './Greenbtn';

const Jeep = () => {
    return (
        <div className='mt-5 pt-5 position-relative '>
            <img className=' position-absolute yellow_star d-none d-xl-block' src={yellowstar} alt="" />
            <img className=' position-absolute z_index_1 d-none d-xl-block' src={jeep_shadow} alt="" />
            <img className=' position-absolute z_index_1 shadow_ d-none d-xl-block' src={shadow_2} alt="" />
            <div className=' align-items-center pt-5 mt-5'>
                <div className='container_my  mt-5'>
                    <Row className=' align-items-center'>
                        <Col xs={12} lg={6}>
                            <img className='img-fluid mb-5' src={jeep} alt="" />
                        </Col>
                        <Col xs={12} lg={6}>
                            <p className='fw_700 fs_48 ff_any_body green'>We Have the largest Network</p>
                            <p className='fw_400 fs_18 ff_red_text grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <span className='mt-5'>                    <Greenbtn title="Learn More" btn="register" />
                            </span>                </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Jeep