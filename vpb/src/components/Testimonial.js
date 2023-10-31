import React, { useEffect, useState } from 'react';
import "./Testimonial.css";
import axios from 'axios';
import Card from 'react-bootstrap/Card';

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/testimonial')
      .then((response) => setTestimonial(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {testimonial.map((testimonials) => (
            <div key={testimonials.id} className="col mb-4">
              <Card style={{ width: '18rem' }}>
                <Card.Img src={testimonials.img_url} alt={testimonials.name} />
                <Card.Body>
                  <Card.Title>{testimonials.name}</Card.Title>
                  <Card.Text>{testimonials.comment}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
