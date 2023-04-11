import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
// import cycle from '../assets/image/png//cycle.png'
import Greenbtn from './Greenbtn';


const Herosection = () => {
    return (
        <div className='container_my pt-5 overflow-hidden '>
            <div className='d-flex'>
                <div>
                    <p className='fw_700 ff_any_body fs_90 green ff_any_body line_height_110 mt-5 pt-5 max_width_1000'>Largest and reliable courier service </p>
                    <p className='fw_700 fs_80 ff_any_body green'>in your city</p>
                    <p className='fw_400 fs_25  ff_red_text  lightgrey max_width_700'>Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu fugiat nulla pariatur.</p>
                    <div className='bg_green d-flex align-items-center justify-content-between mt-5 flex-column flex-sm-row' >
                        <input className='placeholder fw_400 fs_30 ff_red_text grey ps-4 ' type="text" placeholder='Enter Tracking Number' />
                        <span className='mb-5 mb-sm-0'>                        <Greenbtn title="Check" btn="placholder_btn" />
                        </span>                    </div>
                </div>
                <div>
                    {/* <img className=' position-absolute' src={cycle} alt="" /> */}

                </div>
            </div>
        </div>
    )
}

export default Herosection