import axios from "axios"
import { useCallback, useState } from "react"
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom"


export default function UpdatedTodos() {

  const { id } = useParams()
  const url = "http://localhost:5000";
  const navigate = useNavigate()

  const [data, setData] = useState({ title: "", description: "", createdAt: "" })



  const updateHandler = useCallback(async (e) => {
    e.preventDefault()
    try {
      await axios.put(`${url}/api/update/${id}`,data)
      toast.success("Todo is Updated")
      navigate("/all")

    } catch (error) {
      console.log(error)
      toast.error("Error occured")
    }
  }, [data,id])



  const changeHandler = useCallback((e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }, [data])


  return (
    <div className=" container-fluid">
      <div className="row w-100">
        <div className=" col-8 mx-auto" >
          <form onSubmit={updateHandler}>
            {/* Todo  */}
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Update Title</label>
              <input type="text" onChange={changeHandler} value={data.title} className="form-control" name='title' placeholder="Write Your New Title" />
              <p id='message' className=' text-danger'></p>
            </div>
            {/* Description  */}
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Update Description</label>
              <textarea className="form-control" onChange={changeHandler} value={data.description} name='description' rows="3" placeholder='Type Your Description'></textarea>
              <p id='message' className=' text-danger'></p>
            </div>

            {/* Date  */}
            <div className="mb-3 w-25">
              <label htmlFor="createdAt" className="form-label">Update Date</label>
              <input type="date" onChange={changeHandler} value={data.createdAt} className="form-control" name='createdAt' />
              <p id='message' className=' text-danger'></p>
            </div>
            <div className="mb-3">
              <button type='submit' className=' btn btn-success'>Update</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}
