import React from 'react';



import './Hero.css';

const Hero = () => {
    return(
        <div id="hero" className="d-flex align-items-center">

        <div className="container">
          <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
              <h1>Better Solutions For Your Business</h1>
              <h2>We are team of talented designers making websites with Bootstrap</h2>
              <div class="d-flex justify-content-center justify-content-lg-start">
                <a href="#about" class="btn-get-started scrollto">Get Started</a>
                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
              </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
            </div>
          </div>
        </div>
    
      </div>   
    )
};

export default Hero;