import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProjectPage() {
  const { projectId } = useParams(); // Get the project ID from the URL
  const [project, setProject] = useState({});

  useEffect(() => {
    // Fetch the project details based on the project ID from the URL
    axios.get(`http://localhost:3000/api/project?id=${projectId}`)
      .then((response) => {
        setProject(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [projectId]);

  return (
    <div className="project-page">
      {project.title ? (
        <div>
          <h1>{project.title}</h1>
          <p>Description: {project.description}</p>
          <img src={project.image_url} alt={project.title} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProjectPage;
