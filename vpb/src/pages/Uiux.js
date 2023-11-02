import React from 'react';
import './ui.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ContactCard from '../components/Contact-card';
import ui1 from "../images/ui1.png";
import { svgCode } from '../components/bgprojects';

const Uiux= () => {
    
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

    
    
