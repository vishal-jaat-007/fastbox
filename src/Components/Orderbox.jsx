import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Orderbox = () => {
    return (
        <div className=' container_my mb-5'>
            <Row>
                <Col xs={12} lg={4}>
                    <div className='d-flex bg_white    pt-5 justify-content-center'>
                        <p className='fw_700 fs_45 ff_poppins lightgreen pt-5'>01</p>
                        <div className='ps-5'>
                            <p className=' ff_any_body fw_700 darkblack fs_22 mb-0 pt-5'>Easy to order</p>
                            <p className=' ff_red_text fw_400 fs_18 lightgrey max_width_302 mb-0 '>Stacks is a production-ready library of stackable content blocks built in React Native</p>
                        </div>
                    </div>

                </Col>
                <Col xs={12} lg={4}>
                    <div className='d-flex bg_white    pt-5 justify-content-center'>
                        <p className='fw_700 fs_45 ff_poppins lightgreen pt-5'>02</p>
                        <div className='ps-5'>
                            <p className=' ff_any_body fw_700 darkblack fs_22 mb-0 pt-5'>Cash on delivery</p>
                            <p className=' ff_red_text fw_400 fs_18 lightgrey max_width_302 mb-0 '>Stacks is a production-ready library of stackable content blocks built in React Native</p>
                        </div>
                    </div>

                </Col>
                <Col xs={12} lg={4}>
                    <div className='d-flex bg_white    pt-5 justify-content-center'>
                        <p className='fw_700 fs_45 ff_poppins lightgreen pt-5'>03</p>
                        <div className='ps-5'>
                            <p className=' ff_any_body fw_700 darkblack fs_22 mb-0 pt-5'>Live tracking</p>
                            <p className=' ff_red_text fw_400 fs_18 lightgrey max_width_302 mb-0 '>Stacks is a production-ready library of stackable content blocks built in React Native</p>
                        </div>
                    </div>

                </Col>
            </Row>









        </div>
    )
}

export default Orderbox