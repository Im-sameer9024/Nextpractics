import { Link } from "react-router-dom"
import "./Navbar.scss"
import { useState } from "react"

export default function Navbar() {

  const[page,setPage] = useState("home")

  return (
        <nav className="navbar navbar-expand-lg vw-100">
          <div className="container-fluid">
            <div className="row w-100">
              <div className="col-6 mx-auto">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav d-flex justify-content-center mx-auto gap-4 fs-5 ">
                    <li className="nav-item">
                      <Link onClick={()=>setPage("home")}  to="/" className={`nav-link text-color ${page === "home" ? "active":null} `}>Home</Link>
                    </li>
                    <li  className="nav-item">
                      <Link to="all" onClick={()=>setPage("todos")} className={`nav-link text-color ${page === "todos" ? "active":null} `}>AllTodos</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
  )
}
