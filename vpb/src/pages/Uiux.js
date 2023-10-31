import React from 'react';
import './ui.css';
import img1 from "../images/ui1.jpeg";
import img2 from "../images/uiux.jpeg";
// import ContactForm from './form';
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



  return (
    <div className="container">
   <div className="background" dangerouslySetInnerHTML={{ __html: svgCode }} />
   <div className="row">
        <div className="col-md-8">
          <div className="id-5" style={{ position: "relative", zIndex: 2 }}>
            <button className="ui">UI/UX DESIGN</button>
            <h2>UI/UX Design That Gets Results</h2>
            <p>
              UI/UX design creates visually pleasing, user-friendly interfaces by understanding user needs, crafting intuitive designs, and validating them for user satisfaction.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <img src={ui1} id="img" className="img-fluid float-right mt-3" alt="Your Image" />
     
        </div>
      </div>
      <div className="big">
        <h2>UI/UX Design The Key to a Successful Website</h2>
        <p>
        A good looking UI/UX design is important for any website because it makes the website more visually appealing and engaging, easier to use, builds trust and credibility, and can improve conversion rates. A visually appealing website is more likely to capture the attention of visitors and keep them engaged, which can lead to increased time spent on the website and improved SEO rankings. A well-designed UI/UX will make it easy for visitors to find what they are looking for and complete their tasks, which can lead to a better user experience and increased satisfaction and loyalty. A website that looks professional and well-designed will build trust and credibility with visitors, which can make them more likely to do business with the website owner. Finally, a good UI/UX can help to improve conversion rates by making it easier for visitors to take the desired action, such as making a purchase or signing up for a newsletter.
        </p>
      </div>
      <div className="overview-wrap4">
        <div>
          <h4>Benefits of Having a Digital Marketing for Your Business :
         </h4>
          <ul className="overview-list4">
            <li>Cost-effective.</li>
            <li>Global reach</li>
            <li>Targeted advertising</li>
            <li>Measurable results</li>
            <li>Engagement.</li>
          </ul>
        </div>
        <br />
        <p>
        If you are not already using digital marketing, I encourage you to start. It is an essential part of any business's marketing strategy in 2023.
        </p>
      </div>
      <div className="col-lg-4 sm-padding">
        <div className="siebar-widget">
          <div className="service-form-heading4">
            <h3>Send Us A Message</h3>
            <p>
              We're always happy to hear from you. Send us a message and let us know how we can help.
            </p>
            <section>
           {/* <ContactForm />  */}
            </section>
          </div>
        </div>
      </div>
      <br />
      </div>
    
        
           

  );
};

export default Uiux;

    
    
