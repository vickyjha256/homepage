import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
     {/* Navbar */}
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Memo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-4">
                <Link className="nav-link" to="/">Product</Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" to="/">Solution</Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" to="/">Pricing</Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" to="/">Company</Link>
              </li>
              <li className="nav-item me-4">
                <Link className="btn btn-primary" to="/">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Log in</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar