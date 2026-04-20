import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'


function Material() {
  const [editId, setEditId] = useState(null);
  const [materialQnty, setMaterialQnty] = useState('')
  const [customQty, setCustomQty] = useState('')
  const [materialName, setMaterialName] = useState('')
  const [materialPrice, setMaterialPrice] = useState('')
  const [materialImage, setMaterialImage] = useState('')
  const [myMaterials, setMyMaterials] = useState([])
  const smId = localStorage.getItem("siteManagerId");


const editMaterial = async (item) => {
    setEditId(item._id)
  
    setMaterialName(item.materialName)
    setMaterialQnty(item.materialQnty)
    setMaterialPrice(item.materialPrice)
  }



  async function addmaterial(e) {
    e.preventDefault();

    const formdata = new FormData()
    const finalQty = materialQnty === "other" ? customQty : materialQnty;
    formdata.append('materialName', materialName)
    formdata.append("materialPrice", materialPrice)
    formdata.append("materialImage", materialImage);
    formdata.append("materialQnty", finalQty);
    formdata.append('smId', smId)


    let res;

    if (editId) {
      res = await axios.put(`http://localhost:3000/api/material/${editId}`, formdata)
      if (res.data.msg === "success") {
        toast.success("Material Updated");
      }
    }

    else {

      res = await axios.post('http://localhost:3000/api/material', formdata)
      if (res.data.msg === "success") {
        toast.success("Material Added")

      }
    }
    setEditId(null);
    setMaterialName('');
    setMaterialPrice('');
    setMaterialQnty('');
    setCustomQty('');
    setMaterialImage('');

    getmaterial();

  }

  const getmaterial = async () => {
    const res = await axios.get(`http://localhost:3000/api/material/${smId}`)
    if (res.data.msg === 'success') {
      setMyMaterials(res.data.material)

    }
  }
  const deleteMaterial = async (id) => {
    const confrim = window.confirm("Are you Sure??")
    if (!confrim) return;
    const res = await axios.delete(`http://localhost:3000/api/material/${id}`)
    if (res.data.msg === "success") {
      toast.success("Deleted Success")
      getmaterial();
    }
    else {
      toast.error('something went wrong')
    }

  }

  

  useEffect(() => {
    getmaterial()
  }, [])


  return (
    <>

      <div className="row">
        <div className="col-md-8 mx-auto mt-4">
          <form className="row g-3 p-4 text-white" onSubmit={addmaterial} style={{ backgroundColor: "#624430" }}>
            <div className="col-md-6">
              <label className="form-label">Material Name:</label>
              <input type="text" className="form-control" value={materialName} onChange={(e) => setMaterialName(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Material Price</label>
              <input type="text" className="form-control" value={materialPrice} onChange={(e) => setMaterialPrice(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Material Quantity</label>
              <select name="" id="" className="form-control" value={materialQnty} onChange={(e) => setMaterialQnty(e.target.value)}>
                <option value="">--Select Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="other">Other</option>
              </select>

              {materialQnty === "other" && (
                <input
                  type="number"
                  className="form-control mt-2"
                  placeholder="Enter custom quantity"
                  value={customQty}
                  onChange={(e) => setCustomQty(e.target.value)}
                />
              )}
            </div>
            <div className="col-md-6">
              <label className="form-label">Material Image</label>
              <input type="file" className="form-control" onChange={(e) => setMaterialImage(e.target.files[0])} />
            </div>

            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary w-50">  {editId ? "Update Material" : "Add Materials"}</button>
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col-md-10 mx-auto table-responsive mt-5">
          <table className='table table-bordered text-center'>
            <thead className='table-dark'>
              <tr>
                <th>S.No</th>
                <th>Image</th>
                <th>Material Name</th>
                <th>Material Price</th>
                <th>Material Quantity</th>
                <th>Toatal Price</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                myMaterials.map((e, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td> <img
                      src={`http://localhost:3000/upload/${e.materialImage}`}
                      alt=""
                      height={80}
                      width={80}
                      className="rounded-circle border border-3"
                    /></td>

                    <td>{e.materialName}</td>
                    <td>{e.materialPrice}</td>
                    <td>{e.materialQnty}</td>
                    <td>{e.materialPrice * e.materialQnty}</td>
                    <td><button className='btn btn-outline-warning' onClick={() => editMaterial(e)}>Edit</button></td>
                    <td><button className='btn btn-outline-danger' onClick={() => deleteMaterial(e._id)} >Delete</button></td>
                  </tr>
                ))
              }
            </tbody>

          </table>


        </div>
      </div>



    </>
  )
}

export default Material
