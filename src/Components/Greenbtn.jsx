import React from 'react'

const Greenbtn = (props) => {
    return (
        <div>

            <a id={props.btn} className='btn_style d-inline-block' href="#">   {props.title}</a>

        </div>
    )
}

export default Greenbtn