import React from 'react';
import Happy from './images/Happy.png';
import Train from './images/Train.png';
import Hero from './images/Hero2.png';




const Collection = () => {
    return (
        <div id="services" className="services">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Collection</h2>
                </div>

                <div className="row">
                    <div className="col-xl-6 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                        
                        <img src={Happy} className="img-fluid" alt=""/>
                            
                    </div>

                    <div class="col-xl-6 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                       <img src={Train} className="img-fluid" alt=""/>
                    </div>

                </div>

                <div className="about">

                </div>    

            </div>
        </div>
    )
};


export default Collection;