import React from 'react'

function TestimonialCard(p) {
    return (
        <div>
            <div className="card position-relative p-0">
                <img src={p.img} alt="" className='img-fluid' />
                <div className="review-text p-4">
                    <h6><i class="fa-solid fa-location-dot"></i> {p.location}</h6>
                    <span className='px-4 py-2 '>Basic</span>
                    <span className='px-4 py-2 ms-3'>G+2</span>
                    <h3 className='my-3'>{p.name}</h3>
                    <p>{p.review}</p>

                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
