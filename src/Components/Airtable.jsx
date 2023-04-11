import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import airtable from '../assets/image/png//airtable.png'
import sketch from '../assets/image/png//sketch.png'
import dribble from '../assets/image/png//dribble.png'
import slack from '../assets/image/png//slack.png'
import livechat from '../assets/image/png//livechat.png'
import gitlab from '../assets/image/png//gitlab.png'


const Airtable = () => {
    return (
        <div className='mt-5 py-5'>
            <section className='bg_green_1 py-5  mt-5'>
                <div className=' container_my'>
                    <Row className='pt-4'>
                        <Col xs={6} md={4} lg={3} xl={2}>
                            <img className='img-fluid pt-5 pt-xl-0' src={airtable} alt="" />
                        </Col>
                        <Col xs={6} md={4} lg={3} xl={2}>
                            <img className='img-fluid pt-5 pt-xl-0' src={sketch} alt="" />
                        </Col>
                        <Col xs={6} md={4} lg={3} xl={2}>
                            <img className='img-fluid pt-5 pt-xl-0' src={dribble} alt="" />
                        </Col>
                        <Col xs={6} md={4} lg={3} xl={2}>
                            <img className='img-fluid pt-5 pt-xl-0' src={slack} alt="" />
                        </Col>
                        <Col xs={6} md={4} lg={3} xl={2}>
                            <img className='img-fluid pt-5 pt-xl-0' src={livechat} alt="" />
                        </Col>
                        <Col xs={6} md={4} lg={3} xl={2}>
                            <img className='img-fluid pt-5 pt-xl-0 ' src={gitlab} alt="" />
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    )
}

export default Airtable