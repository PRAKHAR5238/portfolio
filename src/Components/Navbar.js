import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const openGmail = () => {
  const recipient = 'prakharshukla062@gmail.com'; // Replace with your Gmail address
  const subject = 'Subject'; // Optional: Replace with your desired subject
  const body = 'Hello, this is the body of the email.'; // Optional: Replace with your desired email body

  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
};
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark" data-aos="zoom-in-up" data-aos-duration="1000">
        <div className="container-fluid">
          <div className="social-buttons">
            <div className="contact-icon"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >

              <a href="https://www.linkedin.com/in/prakhar-shukla-94313424b/" className="social-button social-button--linkedin" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>


              <a href="https://github.com/PRAKHAR5238" className="social-button social-button--github" aria-label="GitHub" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a href="mailto:prakharshukla062@gmail.com" className="social-button social-button--gmail" aria-label="Gmail" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>

            </div>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"  >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Skills">Skills</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/projects">Projects</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

