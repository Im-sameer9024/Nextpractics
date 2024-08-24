import "./Navbar.scss"

export default function Navbar() {
  return (
    
        <nav className="navbar navbar-expand-lg vw-100">
          <div className="container-fluid">
            <div className="row w-100">
              <div className="col-6 mx-auto">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav d-flex justify-content-center mx-auto gap-4 fs-5 ">
                    <li className="nav-item ">
                      <a className="nav-link text-color " href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-color" href="#">AllTodos</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-color" href="#">DeletedTodos</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
  )
}
