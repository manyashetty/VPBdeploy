// ProjectPage.js
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import proimg from "../images/Organizing projects-rafiki.png";
import { svgCode } from '../components/bgprojects';
import "./Pro.css";

const ProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/project/${id}`)
      .then((response) => {
        setProject(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the Project:", error);
      });
  }, [id]);

  if (!project) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
   <div className="background" dangerouslySetInnerHTML={{ __html: svgCode }} />

      <h1>Project Details</h1>
      <img src={proimg} alt="proimg "  className="proimg"/>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src={project.image_url} className="card-img-top" alt={project.name} />
     
            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <p className="card-text">{project.description}</p>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
