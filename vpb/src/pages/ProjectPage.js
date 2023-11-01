import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'; // Import Axios for making API requests

const ProjectPage = () => {
  const { id } = useParams(); // Get the project ID from the route parameters
  const [project, setProject] = useState(null); // Use state for the project data

  useEffect(() => {
    axios.get(`http://localhost:3000/api/project/${id}`)
      .then((response) => {
        console.log('API Response:', response.data);
        setProject(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the Project:", error);
      });
  }, [id]);
  
  if (!project) {
    // Display a loading message while fetching the project
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1>Project Details</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src={project.image_url} className="card-img-top" alt={project.project_title} />
            <h5 className="card-header">{project.project_category}</h5>
            <div className="card-body">
              <h5 className="card-title">{project.project_title}</h5>
              <p className="card-text">{project.project_description}</p>
              <Link to={`/projects/id?id=${project._id}`} className="btn btn-primary">
                More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
