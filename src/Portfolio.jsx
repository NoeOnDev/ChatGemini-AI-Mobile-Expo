import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faLinkedinIn, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Custom.css';

function Portfolio() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="/portatil2.png" alt="" width="50" height="50" className="d-inline-block align-text-top me-2" />
            NoeOnDev
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active me-4" aria-current="page" href="#">About</a>
              <a className="nav-link active me-4" aria-current="page" href="#">Resume</a>
              <a className="nav-link active me-4" aria-current="page" href="#">Portfolio</a>
              <a className="nav-link active me-4" aria-current="page" href="#">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mt-5 banner">
        <div className="social-links">
          <a href="https://www.twitter.com/tu-usuario" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://www.linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://www.github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.youtube.com/tu-usuario" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        <div className="profile-info">
          <img src="/noeon.jpeg" alt="Mi foto" width="150" height="150" className="img-fluid rounded-circle mb-3" />
          <h1 className="display-4">NoeOnDev</h1>
          <p className="lead">Full Stack Developer</p>
          <p className="lead">I am a Full Stack Developer with experience in developing web applications using JavaScript, React, Node.js, Express, MongoDB, Mysql, and more. I am passionate about learning new technologies and building software solutions.</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;