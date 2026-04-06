import React from 'react'

function ServiceCard(p) {
    return (
        <div>

            <div className="service-card p-3">
                <div className='mb-4'>{p.icon}</div>

                <h5>{p.heading}</h5>
                <div className="my-3 l"></div>
                <p>{p.para1} </p>
                <p>  {p.para2}</p>
                <button className='btn '>Book Now</button>
            </div>

        </div>
    )
}

export default ServiceCard
