import React, { useEffect, useState } from 'react';
import './Services.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

const Services = () => {
  const [services, setServices] = useState([]);
  const itemsPerSlide = 4; // Number of items to display in each slide
  const totalSlides = Math.ceil(services.length / itemsPerSlide); 

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/services')
      .then((response) => setServices(response.data))
      .catch((error) => console.log(error));
  }, []);

  // Split the services into slides
  const serviceSlides = Array.from({ length: totalSlides }, (_, index) =>
    services.slice(index * itemsPerSlide, (index + 1) * itemsPerSlide)
  );

  return (
    <div>
      <div className="container">
        <Carousel interval={null} indicators={false}>
          {serviceSlides.map((slide, index) => (
            <Carousel.Item key={index}>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                {slide.map((service) => (
                  <div key={service.id} className="col">
                    <Card style={{ width: '18rem', height: '20rem' }}>
                      <Card.Img
                        src={service.image_url}
                        alt={service.name}
                        style={{ width: '17rem', height: '14rem' }}
                      />
                      <Card.Body>
                        <Card.Title>{service.name}</Card.Title>
                        <Card.Text>{service.description.split('\n')[0]}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
