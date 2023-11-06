import React from 'react'
import ContactCard from '../components/Contact-card';
import "./Contact.css";
export const Contact = () => {
  return (
<>
<div className="container11">
        <div class="row-align-items-center">
            <div class="col-lg-11">
                <div class="contact-info">
                    <div class="contact-heading">
                        <h2><b>Get In Touch</b></h2>
                        <p>Our success in creating business solutions is due in large part spacially to talented and highly committed team.</p>
                    </div>
                    <ul class="contact-details">
                        <li>
                            <i class="las la-mao-marked-alt">
                                
                            </i>
                            Kinfra Calicut - Near Calicut University, Chelambra P.O
                            <br></br>
                            Kakkancherry, Malappuram, Kerala. 673634
                        </li>
                        <br></br>
                        <li>
                            <i class="las la-envelope-open">
                                
                            </i>
                            voltixsolution@gmail.com
                        </li>
                        <br></br>
                        <li>
                            <i class="las la-phone-volume">
                                
                            </i>
                            +91 80893 25152
                            <br></br>
                            +91 70340 40213
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-6 sm-padding">
                <div class="contact-form-wrap">
                    <div class="contact-heading1">
                        <h2><b>Fill Up The Form</b></h2>
                        <p>Our success in creating business solutions is due in large part spacially to talented and highly committed team.</p>
                    </div>
                    <div className="clearfix">
                    <section>
                        <ContactCard />
                    </section>
                    </div>
                </div>
            </div>
        </div>
      
    </div>

</>
  )
}
