import "./Navigation.scss"

export default function Navigation() {
  return (
    <div className=" container-fluid">
      <div className="row">
        <div className="col p-0">
          <nav className="navbar navbar-expand-sm bg-black bg-opacity-75 p-0">
            <div className="container-fluid">
              <a className="navbar-brand fs-1 fw-bold" href="#">GrandCoffee</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
                <ul className="navbar-nav d-flex gap-5 fs-5 px-5 ">
                  <li className="nav-item">
                    <a className="nav-link "  href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">Gallery</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

    </div>
  )
}
