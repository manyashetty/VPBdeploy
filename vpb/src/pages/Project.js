// // Project.js
// import React from 'react';
// import { Link } from "react-router-dom";

// export const Project = () => {
//   const projectIds = ["652f81337c9d237a1b706826", "652f800c7c9d237a1b706825", "yetAnotherProjectId"];
//   return (

//     <div>
//         {projectIds.map((projectId) => (
            
//       <div className="row">
//         <div className="col-md-4">
//           <div className="card mb-4">
//             <img src={projectId.image_url} className="card-img-top" alt={projectId.name} />
     
//             <div className="card-body">
//               <h5 className="card-title">{projectId.name}</h5>
//               <p className="card-text">{projectId.description}</p>
//             <Link to={`/project/${projectId}`} className="btn btn-primary">
//                 More{projectId}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
          
//         ))}

//     </div>
//   );
// };


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
                <p className="card-text">{`Description for Project ${projectId.description}`}</p>
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


