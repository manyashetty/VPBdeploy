import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from '../components/Navbar';
import "./Home.css";
import Services from '../components/Services';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonial';
export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>Your content here</p>
          <a href="/learn-more" className="btn">Learn More</a>
        </div>
      </section>

      <section className="content">
        <div className="content-inner">
          <h2>Our Services</h2>
          <Services />
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials-content">
          <Testimonials />
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        {/* Contact form and information here */}
      </section>
      
      <Footer />
    </div>

  )
}
