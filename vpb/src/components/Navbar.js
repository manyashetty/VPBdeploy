import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
    
      <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
