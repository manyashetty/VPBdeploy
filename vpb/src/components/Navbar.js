import React from 'react';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Navbar.css";
import logo from "../assets/Icon.png";
import axios from 'axios';

export const Navbar = () => {
  const [services, setServicesNames] = useState([]);

  useEffect(() => {
  
    axios.get('http://localhost:3000/api/services')
    .then((response) => {
      setServicesNames(response.data); 
    })
    .catch((error) => {
      console.error('Error fetching Service Names:', error);
    });
  },[]);


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark-blue ">
        <div className="container">
          <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active text-white" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" href="/about">About</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                <ul className="dropdown-menu">
                  {services.map(service => (
                    <li key={service.id}>
                      <a className="dropdown-item" href={`/services/${service._id}`}>{service.name}</a>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link active text-white" href="/project">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
