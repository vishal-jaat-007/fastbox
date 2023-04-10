import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import cycle from '../assets/image/png//cycle.png'


const Herosection = () => {
    return (
        <Container className='container_my'>
            <p className='fw_700 ff_any_body fs_90 green ff_any_body'>Largest and reliable courier service </p>
            <p className='fw_700 fs_80 ff_any_body green'>in your city</p>
            <p className='fw_400 fs_25  ff_red_text  lightgrey max_width_700'>Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu fugiat nulla pariatur.</p>
            <input className='placeholder fw_400 fs_20 ff_red_text grey ps-4' type="text" placeholder='Enter Tracking Number' />

        </Container>
    )
}

export default Herosection