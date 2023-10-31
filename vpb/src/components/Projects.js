import React, { useEffect, useState } from 'react';
import './Projects.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const itemsPerSlide = 4; // Number of items to display in each slide
  const totalSlides = Math.ceil(projects.length / itemsPerSlide); // Calculate the total number of slides

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/project')
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  }, []);

  // Split the projects into slides
  const projectSlides = Array.from({ length: totalSlides }, (_, index) =>
    projects.slice(index * itemsPerSlide, (index + 1) * itemsPerSlide)
  );

  return (
    <div>
      <div className="container">
        <Carousel interval={null} indicators={false}>
          {projectSlides.map((slide, index) => (
            <Carousel.Item key={index}>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                {slide.map((project) => (
                  <div key={project.id} className="col">
                    <Card style={{ width: '18rem' }}>
                      <Card.Img src={project.image_url} alt={project.name} />
                      <Card.Body>
                        <Card.Title>{project.name}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
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

export default Projects;
