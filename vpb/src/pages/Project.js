import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Project = () => {
  const [projectIds, setProjectIds] = useState([]);

  useEffect(() => {
    // Fetch the list of project IDs from your API
    axios.get('http://localhost:3000/api/project')
      .then((response) => {
        setProjectIds(response.data); // Assuming your API returns an array of project IDs
      })
      .catch((error) => {
        console.error('Error fetching project IDs:', error);
      });
  }, []);

  return (
    <div>
      {projectIds.map((projectId) => (
        <div className="row" key={projectId}>
          <div className="col-md-4">
            <div className="card mb-4">
       
              <img src={`${projectId.image_url}`} className="card-img-top" alt={`Project ${projectId}`} />
              <div className="card-body">
                <h5 className="card-title">{`Project ${projectId.name}`}</h5>
                <p className="card-text">{`Description for Project ${projectId.description.split('\n')[1]}`}</p>
                <Link to={`/project/${projectId._id}`} className="btn btn-primary">
                  More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


