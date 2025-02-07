import { Link } from 'react-router';

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg w-100">
      <div className="container-fluid">
        <a className="navbar-brand " href="#">
          <h1 className="fw-bold ms-5">Happy Tails</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto me-2">
            <Link
              to="/home"
              className="nav-link active"
              aria-current="page"
              href="#"
            >
              Home
            </Link>
            <Link to="/adopt" className="nav-link active" href="#">
              Adopt
            </Link>
            <Link to="/contact-us" className="nav-link active" href="#">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
