import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import "./Home.css";
import Services from '../components/Services';
import Projects from '../components/Projects';

import Testimonials from '../components/Testimonial';
export const Home = () => {
  return (
    <div className="home">
      
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>Your content here</p>
          <a href="/learn-more" className="btn">Learn More</a>
        </div>
      </section>
      <div className='content-1'>
        <h2>Keeping You in the Loop: <br/>Our Promise to Provide Unparalleled Customer Service!</h2>
        <p>We are committed to exceptional customer service, answering questions, and keeping you <br/>updated on marketing campaigns.Our goal is to establish a strong partnership and help you succeed.</p>
      </div>
      <section className="services">
        <div className="services-inner">
          <h2 id="hval">Our Services</h2>
          <Services />
        </div>
      </section>

<section className="content-2">
<h2>Keeping You in the Loop: <br/>Our Promise to Provide Unparalleled Customer Service!</h2>
        <p>We are committed to exceptional customer service, answering questions, and keeping you <br/>updated on marketing campaigns.Our goal is to establish a strong partnership and help you succeed.</p>
</section>

      <section className="projects">
        <div className="projects-inner">
          <h2 id="hval">Projects</h2>
          <Projects />
        </div>
      </section>

      <section className="content-2">
<h2>Keeping You in the Loop: <br/>Our Promise to Provide Unparalleled Customer Service!</h2>
        <p>We are committed to exceptional customer service, answering questions, and keeping you <br/>updated on marketing campaigns.Our goal is to establish a strong partnership and help you succeed.</p>
</section>

      <section className="testimonials">
        <div className="testimonials-content">
          <h2>Our Trusted Testimonials!!</h2>
          <Testimonials />
        </div>
      </section>

      
      
    </div>

  )
}
