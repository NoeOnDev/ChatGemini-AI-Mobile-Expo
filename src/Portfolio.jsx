import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from './Portfolio.module.css';
import './Custom.css';

function Portfolio() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="/portatil.png" alt="" width="50" height="45" className="d-inline-block align-text-top" />
            NoeOnDev
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" aria-current="page" href="#">About</a>
              <a className="nav-link active" aria-current="page" href="#">Resume</a>
              <a className="nav-link active" aria-current="page" href="#">Portfolio</a>
              <a className="nav-link active" aria-current="page" href="#">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Portfolio;
