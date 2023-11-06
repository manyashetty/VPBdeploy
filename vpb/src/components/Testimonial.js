import React, { useEffect, useState } from 'react';
import './Testimonial.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import img from '../images/Online Review-pana.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap';

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/testimonial')
      .then((response) => setTestimonial(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <Carousel interval={3000} pause={false} ride="carousel">
            {testimonial.map((testimonials) => (
              <Carousel.Item key={testimonials.id}>
                <Card className="testimonial-card">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="card-image">
                        <Card.Img
                          src={testimonials.img_url}
                          alt={testimonials.name}
                          className="img-thumbnail"
                        />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="card-content">
                        <Card.Title>{testimonials.name}</Card.Title>
                        <Card.Text>{testimonials.comment}</Card.Text>
                      </div>
                    </div>
                  </div>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="col-md-5">
          <img src={img} alt="Your Image Alt Text" className="img-fluid" id="pic" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;


// import React, { useEffect, useState } from 'react';
// import './Testimonial.css';
// import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import img from '../images/Online Review-pana.png';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import { Carousel } from 'react-bootstrap';

// const Testimonial = () => {
//   const [testimonial, setTestimonial] = useState([]);

//   useEffect(() => {
//     axios
//       .get('http://localhost:3000/api/testimonial')
//       .then((response) => setTestimonial(response.data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-7">
//           <Carousel interval={3000} pause={false} ride="carousel">
//             {testimonial.map((testimonials) => (
//               <Carousel.Item key={testimonials.id}>
//                 <Card className="testimonial-card">
//                   <div className="row">
//                     <div className="col-md-4">
//                       <div className="card-image">
//                         <Card.Img
//                           src={testimonials.img_url}
//                           alt={testimonials.name}
//                           className="img-thumbnail"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-md-8">
//                       <div className="card-content">
//                         <Card.Title>{testimonials.name}</Card.Title>
//                         <Card.Text>{testimonials.comment}</Card.Text>
//                       </div>
//                     </div>
//                   </div>
//                 </Card>
//               </Carousel.Item>
//             ))}
//           </Carousel>
//         </div>
//         <div className="col-md-5">
//           <img src={img} alt="Your Image Alt Text" className="img-fluid" id="pic" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;

