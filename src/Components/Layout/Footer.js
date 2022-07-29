import React from 'react';
import githubLogo from './../../images/github.png';

function Footer() {
  return (
    <footer className="navbar navbar-dark bg-dark text-light fixed-bottom">
      <div className="container d-flex justify-content-between">
        <div>
          © {new Date().getFullYear()} Designed by{' '}
          <a
            className="text-white text-decoration-none"
            target="_blank"
            href="https://sajjadshadrooz.ir/"
            rel="noopener noreferrer"
          >
            Sajjadshadrooz.ir
          </a>
        </div>
        <div>
          <a
            href="https://github.com/sajjadshadrooz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="text-light" src={githubLogo} alt="Github" />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
