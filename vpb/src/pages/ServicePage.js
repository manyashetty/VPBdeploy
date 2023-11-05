
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import serimg from "../images/Web devices-amico.png";
import { svgCode } from '../components/bgprojects';
import "./Pro.css";
import ContactCard from '../components/Contact-card';

const ServicePage = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
  
    axios.get(`http://localhost:3000/api/services/${id}`)
    .then((response) => {
      setService(response.data); 
    })
    .catch((error) => {
      console.error('Error fetching Service Names:', error);
    });
  },[id]);

  if (!service) {
    return <div className="loading-spinner"></div>;
  }
  const paragraphs = service.description.split("\n");
  const descriptionWithoutFirstLine = paragraphs.slice(2).join("\n");
  return (

<div className="container">
      <div className="background" dangerouslySetInnerHTML={{ __html: svgCode }} />

      <div className="row">
        <div className="col-md-6">
        <div id="title">
            <h2>{service.name}</h2>
            <p>{service.description.split("\n")[1]}</p>
          </div>
          
        </div>
        <div className="col-md-6">
        <img src={serimg} alt="serimg" className="serimg" />
        </div>
      </div>
      <div className="row">
       <div className="col-md-6 col-sm-12">
       <ContactCard/>
       </div>
       <div className="col-md-6 col-sm-12">
       <p>{descriptionWithoutFirstLine}</p>
       <img src={service.image_url} className="img-fluid" id="dataimg" alt="text"/>
      <p></p>
     
      </div>
     </div>

    </div>
  );
};

export default ServicePage;
