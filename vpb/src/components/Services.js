import React, { useEffect, useState } from 'react';
import './Services.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/services')
      .then((response) => setServices(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>Services</h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {services.map((service) => (
            <div key={service.id} className="col">
              <Card style={{ width: '18rem' }}>
                <Card.Img src={service.image_url} alt={service.name}  />
                <Card.Body>
                  <Card.Title>{service.name}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
