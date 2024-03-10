import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faXTwitter,
  faLinkedinIn,
  faGithub,
  faYoutube,
  faJava
} from '@fortawesome/free-brands-svg-icons'
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiBootstrap,
  SiExpress,
  SiNestjs,
  SiDjango,
  SiFlask,
  SiLaravel,
  SiSpring,
  SiSequelize,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiMicrosoftsqlserver,
  SiPython,
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiGoland,
} from 'react-icons/si';
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
      <div className="container mt-5 technologies">
        <h2 className="mb-3 title">Stack Development Technologies</h2>
        <ul>
          <li><SiReact /> React</li>
          <li><SiNextdotjs /> Next.js</li>
          <li><SiBootstrap /> Bootstrap</li>
          <li><SiNodedotjs /> Node.js</li>
          <li><SiExpress /> Express</li>
          <li><SiNestjs /> NestJs</li>
          <li><SiDjango /> Django</li>
          <li><SiFlask /> Flask</li>
          <li><SiLaravel /> Laravel</li>
          <li><SiSpring /> Spring</li>
          <li><SiSequelize /> Sequelize</li>
        </ul>
      </div>
      <div className="container mt-5 data">
        <div className="row">
          <div className="col-lg-6">
          <h2 className="mb-3 title">Databases</h2>
      <ul>
        <li><SiMongodb /> MongoDB</li>
        <li><SiMysql /> Mysql</li>
        <li><SiPostgresql /> PostgreSQL</li>
        <li><SiSqlite /> SQLite</li>
        <li><SiMicrosoftsqlserver /> SQL Server</li>
      </ul>
    </div>
    <div className="col-lg-6">
      <h2 className="mb-3 title">Languages</h2>
      <ul>
        <li><SiPython /> Python</li>
        <li><SiTypescript /> Typescript</li>
        <li><SiJavascript /> JavaScript</li>
        <li><SiPhp /> PHP</li>
        <li><SiGoland /> Go</li>
        <li><FontAwesomeIcon icon={faJava} /> Java</li>

      </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;