import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faLinkedinIn, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Portfolio.css';

function Portfolio() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="/portatil2.png" alt="" width="40" height="40" className="d-inline-block align-text-top me-2" />
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
          <a href="https://www.linkedin.com/in/no%C3%A9-alejandro-rodr%C3%ADguez-moto-a48431290/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/NoeOnDev" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.youtube.com/tu-usuario" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        <div className="profile-info">
          <img src="/noeon.jpeg" alt="Mi foto" width="150" height="150" className="img-fluid rounded-circle mb-3 mt-3 profile" />
          <div className="info">
            <h1 className="title">Noé Alejandro Rodríguez Moto </h1>
            <p className="lead paraf">Full Stack Developer</p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4 technologies">
            <h2 className="mb-3">Stack </h2>
            <ul>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Flask</li>
              <li>Laravel</li>
              <li>Spring</li>
            </ul>
          </div>
          <div className="col-lg-4 technologies">
            <h2 className="mb-3">Bases de datos</h2>
            <ul>
              <li>MongoDB</li>
              <li>Mysql</li>
              <li>PostgreSQL</li>
              <li>SQLite</li>
              <li>Redis</li>
              <li>Oracle</li>
              <li>SQL Server</li>
            </ul>
          </div>
          <div className="col-lg-4 technologies">
            <h2 className="mb-3">Lenguajes</h2>
            <ul>
              <li>Python</li>
              <li>Typescript</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>Go</li>
              <li>Java</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;