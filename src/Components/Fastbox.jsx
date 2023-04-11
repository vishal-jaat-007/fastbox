import React from 'react'
import greenstar from '../assets/image/png//green_star.png'



const Fastbox = () => {
    return (
        <div className=' container_my mt-5 py-5'>
            <div className='d-flex align-items-center justify-content-center  position-relative flex-column flex-lg-row text-center text-lg-start'>
                <p className='fw_700 fs_48 ff_any_body green  pe-lg-5 pe-lg-0'>How Fast box works</p>
                <p className=' fw_400 fs_22 ff_red_text grey max_width_492'>Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu fugiat nulla pariatur.</p>
                <img className=' position-absolute green_star d-none  d-xl-block' src={greenstar} alt="" />

            </div>
        </div>
    )
}

export default Fastbox