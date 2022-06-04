import React from 'react';
import logo from './images/Hero.png';



import './Hero.css';

const Hero = () => {
    return(
        <div id="hero" className="d-flex align-items-center">

        <div className="container">
          <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
              <h1>Dog Guards</h1>
              <h2>We are team of talented dog trainers that trains Dogs.</h2>
              
              <div class="d-flex justify-content-center justify-content-lg-start">

                <a href="#about" class="btn-get-started scrollto">Sign Up</a>

              </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                <img src={logo} class="img-fluid animated" alt=""/>
            </div>
          </div>
        </div>
    
      </div>   
    )
};

export default Hero;