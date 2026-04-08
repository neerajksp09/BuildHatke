import React from 'react'

function SMproject() {
    return (
        <>
        

        <div className="row">
            <div className="col-md-11 mx-auto my-4 ">
                      
                      <h2 className='my-4 text-center'>Project:</h2>

                     <div className="table-reponsive">
                <table class="table table-striped table-bordered ">
                   <thead>
                    <tr className='text-center'>
                        <th>S no.</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Location</th>
                        <th>Budgets</th>
                        <th colSpan={2}>Action</th>
                        
                    </tr>
                   </thead>
                   <tbody>
                    <tr  className='text-center'>
                        <td>1</td>
                        <td>Abhishek</td>
                        <td>77t7887</td>
                        <td>JKjghhjkl</td>
                        <td>87782rs</td>
                        <td><button className='btn btn-outline-success'>Accept</button></td>
                        <td><button className='btn btn-outline-danger'>Reject</button></td>
                    </tr>
                   </tbody>
                </table>
            </div>
            </div>
        </div>
        

        </>
    )
}

export default SMproject
