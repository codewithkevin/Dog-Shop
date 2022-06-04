import React from 'react';

import './About.css';

const About = () => {
    return (
        <div id="about" className="about">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>About Us</h2>
                </div>

                <div className="row content">
                <div className="col-lg-6">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                    </p>
                    <ul>
                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                    <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                    </ul>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0">
                    <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    
                    <a href="#" className="btn-learn-more">Learn More</a>
                </div>
                </div>

            </div>
        </div>
    );
};

export default About;