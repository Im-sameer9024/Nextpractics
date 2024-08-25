import { useCallback, useState } from 'react'
import './Todo.scss'
import axios from "axios"
import { toast } from "react-hot-toast"

export default function Todo() {

  const url = "http://localhost:5000";
  const [formData, setFormData] = useState({ title: "", description: "",createdAt:"" })
  const[error,setError] = useState({})

  const validate = () => {
    let tempErrors = {};
    if(!formData.title){
     tempErrors.message1 = "* title is required"
    }
    if(!formData.description){
      tempErrors.message2 = "* description is required" 
    }
    if(!formData.createdAt){
      tempErrors.message3 = "* date is required"
    }
    setError(tempErrors)
    return Object.keys(tempErrors).length === 0;
  };


  const submitHandler = useCallback(async (e) => {
    e.preventDefault()

  if(validate()){
    try {
      const response = await axios.post(`${url}/api/create`, formData)

      if (response.data) {
        console.log(response.data)
        setFormData({ title: "", description: "",createdAt:"" })
        toast.success("Todo is Added")
      }

    } catch (error) {
      toast.error(error)
    }
  }

  }, [formData])

  const changeHandler = useCallback((e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }, [formData])




  return (
    <div className=" container-fluid vw-100 vh-100 bg-color">
      <div className="row w-100">
        <div className=" mx-auto col-6 bg-color shadow-lg border-1 py-3 ">
          <form onSubmit={submitHandler}>
            {/* Todo  */}
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Task</label>
              <input type="text" value={formData.title} className="form-control" name='title' placeholder="Write Your Title" onChange={changeHandler} />
              <p id='message' className=' text-danger'>{error.message1}</p>
            </div>
            {/* Description  */}
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea className="form-control" value={formData.description} name='description' rows="3" placeholder='Type Your Description' onChange={changeHandler}></textarea>
              <p id='message' className=' text-danger'>{error.message2}</p>
            </div>

            {/* Date  */}
            <div className="mb-3 w-25">
              <label htmlFor="createdAt" className="form-label">Date</label>
              <input type="date" value={formData.createdAt} className="form-control" name='createdAt' onChange={changeHandler} />
              <p id='message' className=' text-danger'>{error.message3}</p>
            </div>
            <div className="mb-3">
              <button type='submit' className='btn btn-danger'>Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
