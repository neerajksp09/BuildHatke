import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useParams } from "react-router-dom";

function Material() {
  const [cementName, setCementName] = useState('')
  const [cementQty, setCementQty] = useState('')
  const [brickName, setBrickName] = useState('')
  const [brickQty, setBrickQty] = useState('')
  const [steelName, setSteeltName] = useState('')
  const [steelQty, setSteeltQty] = useState('')
  const [sandName, setSandtName] = useState('')
  const [sandQty, setSandQty] = useState('')
  const [woodName, setWoodName] = useState('')
  const [woodQty, setWoodtQty] = useState('')
  const [tileName, settiletName] = useState('')
  const [tileQty, setTiletQty] = useState('')
  const [paintName, setPaintName] = useState('')
  const [paintQty, setPaintQty] = useState('')
  const [pvcpipeName, setPvcpipeName] = useState('')
  const [pvcpipeQty, setPvcpipeQty] = useState('')
  const { id } = useParams();

  async function materialcode(e) {
    e.preventDefault();

    const smId = localStorage.getItem('siteManagerId')
    const materialdata = {
      cementName, cementQty, brickName, brickQty, steelName, steelQty, sandName, sandQty, woodName, woodQty, tileName, tileQty, paintName, paintQty, pvcpipeName, pvcpipeQty, smId
    }
    const res = await axios.post(`http://localhost:3000/api/material/`,materialdata)
    if (res.data.msg == "success") {
      toast.success("Material Update Success")
      console.log(res.data.material)
    }


  }


  return (
    <>
      <div className="row">
        <div className="col-md-12 p-4">
          <h3>Material Inventory</h3>
          <div className="card table-responsive p-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">S.no</th>
                  <th scope="col">Material</th>
                  <th scope="col">Available</th>
                  <th scope="col">Used</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Cement</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
              </tbody>
            </table>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Update Material
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form action="" onSubmit={materialcode}>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="" className='label-control'>Cement Name:</label>
                    <input type="text" className='form-control' value={cementName} onChange={(e) => setCementName(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className='label-control'>Cement Quantity:</label>
                    <input type="Number" className='form-control' value={cementQty} onChange={(e) => setCementQty(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className='label-control'>Brick Name:</label>
                    <input type="text" className='form-control' value={brickName} onChange={(e) => setBrickName(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className='label-control'>Brick Quantity:</label>
                    <input type="Number" className='form-control' value={brickQty} onChange={(e) => setBrickQty(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className='label-control'>Steel Rode Name:</label>
                    <input type="text" className='form-control' value={steelName} onChange={(e) => setSteeltName(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className='label-control'>Steel Rode Qantity:</label>
                    <input type="Number" className='form-control' value={steelQty} onChange={(e) => setSteeltQty(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className='label-control'>Sand Name:</label>
                    <input type="text" className='form-control' value={sandName} onChange={(e) => setSandtName(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className='label-control'>Sand Quantity:</label>
                    <input type="Number" className='form-control' value={sandQty} onChange={(e) => setSandQty(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className='label-control'>Tiles Name:</label>
                    <input type="text" className='form-control' value={tileName} onChange={(e) => settiletName(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className='label-control'>Tiles Quantity:</label>
                    <input type="Number" className='form-control' value={tileQty} onChange={(e) => setTiletQty(e.target.value)} />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="" className='label-control'>Paint Bucket Name:</label>
                    <input type="text" className='form-control' value={paintName} onChange={(e) => setPaintName(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className='label-control'>Paint Bucket Quantity:</label>
                    <input type="Number" className='form-control' value={paintQty} onChange={(e) => setPaintQty(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className='label-control'>Wood Planks Name:</label>
                    <input type="text" className='form-control' value={woodName} onChange={(e) => setWoodName(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className='label-control'>Wood Planks Quantity:</label>
                    <input type="Number" className='form-control' value={woodQty} onChange={(e) => setWoodtQty(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className='label-control'>PVC Pipe Name:</label>
                    <input type="text" className='form-control' value={pvcpipeName} onChange={(e) => setPvcpipeName(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className='label-control'>PVC Pipe Quantity:</label>
                    <input type="Number" className='form-control' value={pvcpipeQty} onChange={(e) => setPvcpipeQty(e.target.value)} />
                  </div>

                  <button className='btn btn-danger mt-4' type='submit'>Update</button>
                </div>

              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Material
