// ProjectPage.js
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import proimg from "../images/Organizing projects-rafiki.png";
import { svgCode } from '../components/bgprojects';
import "./Pro.css";
import ContactCard from '../components/Contact-card';

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
  const paragraphs = project.description.split("\n");
  const descriptionWithoutFirstLine = paragraphs.slice(2).join("\n");
  return (

<div className="container">
      <div className="background" dangerouslySetInnerHTML={{ __html: svgCode }} />

      <div className="row">
        <div className="col-md-6">
          <img src={proimg} alt="proimg" className="proimg" />
        </div>
        <div className="col-md-6">
          <div id="title">
            <h2>{project.name}</h2>
            <p>{project.description.split("\n")[1]}</p>
          </div>
        </div>
      </div>
      <div className="row">
       <div className="col-md-6 col-sm-12">
       <p>{descriptionWithoutFirstLine}</p>
       <img src={project.image_url} id="dataimg" alt="text"/>
      <p></p>
       </div>
       <div className="col-md-6 col-sm-12">
       <ContactCard/>
      </div>
     </div>
      {/* <ContactCard/> */}
    </div>
  );
};

export default ProjectPage;
