import axios from "axios";
import { useEffect, useState } from "react"
import { MdDelete,MdModeEdit } from "react-icons/md";
import "./AllTodos.scss"
import { useNavigate } from "react-router-dom";


export default function Alltodos() {

  const url = "http://localhost:5000";

  const navigate = useNavigate()

  const [allTodos, setAllTodos] = useState([])
  console.log(allTodos)

  async function deleteHandler(id){
    await axios.delete(`${url}/api/delete/${id}`)
    const finalData = allTodos.filter((todo) => todo._id !== id)
    setAllTodos(finalData) 
  }

  function updateHandler(id){

navigate(`/update/${id}`)


  }

  

  async function fetchData() {
    try {

      const response = await axios.get(`${url}/api/all`)
      setAllTodos(response.data.data);
      

    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    fetchData()
  
  },[])
  
  console.log(allTodos)
  
  return (
    <div className=" container-fluid">
      <div className="row w-100">
        <div className=" col-8 mx-auto" >
          <table className="table text-center ">
            <thead className=" table-primary ">
              <tr>
                <th scope="col" className=" col-1" >S/No.</th>
                <th scope="col" className=" col-1">Title</th>
                <th scope="col" className=" col-4">Description</th>
                <th scope="col" className=" col-1">Date</th>
                <th scope="col" className=" col-1">Delete</th>
                <th scope="col" className=" col-1">Update</th>
              </tr>
            </thead>
            <tbody>
              {
                allTodos.map((item,index) => {
                  return (
                    <tr key={index} className=" align-content-center">
                      <th>{index+1}</th>
                      <th>{item.title}</th>
                      <td>{item.description}</td>
                      <td>{item.createdAt}</td>
                      <td><span onClick={()=>deleteHandler(item._id)} className=" d-flex  justify-content-center fs-4"><MdDelete/></span></td>
                      <td><span onClick={()=>updateHandler(item._id)} className=" d-flex  justify-content-center fs-4"><MdModeEdit/></span></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}
