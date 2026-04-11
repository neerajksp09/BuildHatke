import React from 'react'

function SMconstructors() {
    return (
        <>
            <div className="roq">
                <div className="col-md-11 mx-auto">
                    <div className="row project-card-row">
                        <div className="col-md-4 p-3">
                            <div className="card p-3  h-100 d-flex flex-column">
                                <h4>My Constructors</h4>
                                <h1 className='text-danger'>20</h1>

                            </div>
                        </div>
                        <div className="col-md-4 p-3">
                            <div className="card p-3  h-100 d-flex flex-column">
                                <h4>Assigned Works Constructors</h4>
                                <h1 className='text-warning'>20</h1>

                            </div>
                        </div>
                        <div className="col-md-4 p-3">
                            <div className="card p-3 h-100 d-flex flex-column">
                                <h4>Not Assigned Works Constructors</h4>
                                <h1 className='text-success'>10</h1>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SMconstructors
