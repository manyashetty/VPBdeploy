import React from 'react';
import './ui.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ContactCard from '../components/Contact-card';
import ui1 from "../images/ui1.png";

const Uiux= () => {
    const svgCode = `<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  width="100%"
  height="100%"
  viewBox="0 0 1600 900"
  >
  <defs>
    <linearGradient id="bg" x2="0%" y2="100%">
      <stop
        offset="0%"
        style="stop-color: rgba(14, 95, 224, 0.9)"
      ></stop>
      <stop
        offset="100%"
        style="stop-color: rgba(38, 89, 190, 0.15)"
      ></stop>
    </linearGradient>
    <path
      id="wave"
      fill="url(#bg)"
      d="M-363.852,0c0,0,236.988,41.997,505.475,0
      s371.981,-38.998,575.971,0s293.985,39.278,505.474,-5.859s493.475,-48.368,716.963,4.995v-560.106H-363.852V0z"
    />
  </defs>
  <g>
    <use xlink:href="#wave" opacity=".3">
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="translate"
        dur="8s"
        calcMode="spline"
        values="270 670; -334 720; 270 670"
        keyTimes="0; .5; 1"
        keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
        repeatCount="indefinite"
      />
    </use>
    <use xlink:href="#wave" opacity=".6">
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="translate"
        dur="6s"
        calcMode="spline"
        values="-270 670; 243 680; -270 670"
        keyTimes="0; .6; 1"
        keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
        repeatCount="indefinite"
      />
    </use>
    <use xlink:href="#wave" opacity="1">
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="translate"
        dur="4s"
        calcMode="spline"
        values="0 670; -140 700; 0 670"
        keyTimes="0; .4; 1"
        keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
        repeatCount="indefinite"
      />
    </use>
  </g>
</svg>`;

const [description, setDescription] = useState('');

useEffect(() => {

  axios.get('http://localhost:3000/api/services')
    .then(response => {
      console.log('Response Data:', response.data);
     
      const uiuxService = response.data.find(service => service.name === 'UI/UX Design');
      if (uiuxService) {
        console.log(uiuxService.description);
        setDescription(uiuxService.description);
      }
    })
    .catch(error => {
      console.error('Error fetching data from the backend:');
      console.error('Request:', error.config);
      console.error('Response:', error.response);
    });
}, []);


  return (
    <div className="container">
   <div className="background" dangerouslySetInnerHTML={{ __html: svgCode }} />
   <div className="row">
        <div className="col-md-8">
          <div className="id-5" style={{ position: "relative", zIndex: 2 }}>
            <button className="ui btn btn-subtl">UI/UX DESIGN</button>
            <h2>UI/UX Design That Gets Results</h2>
            <p>
              UI/UX design creates visually pleasing, user-friendly interfaces by understanding user needs, crafting intuitive designs, and validating them for user satisfaction.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <img src={ui1} id="img" className="img-fluid float-right mt-3" alt="Your Image" />
          <p id="para" className='clamped-text'>
              {description}
            </p>

        </div>
<ContactCard/>
      </div>
    
      {/* <div className="big">

      <div className="col-lg-4 sm-padding">
        <div className="siebar-widget">
          <div className="service-form-heading4">
            <h3>Send Us A Message</h3>
            <p>
              We're always happy to hear from you. Send us a message and let us know how we can help.
            </p>
            <section>
          
            </section>
          </div>
        </div>
      </div>
   </div> */}
   </div>
    
        
           

  );
};

export default Uiux;

    
    
