import React from "react";

function Footer() {
    return (
    <footer>
        <div className="footer py-5">
            <div className="container">
                <div className="row text-center">
                    
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h4 className="fw-bold mb-3">LOCATION</h4>
                        <div>2215 John Daniel Drive</div>
                        <div>Clark, MO 65243</div>
                    </div>

                    <div className="col-md-4 mb-4 mb-md-0">
                        <h4 className="fw-bold mb-3">AROUND THE WEB</h4>
                        <div className="d-flex justify-content-center gap-3">

                            <a href="#" className="btn py-2 btn-outline-light rounded-circle">
                            <i className="fab fa-facebook-f"></i>
                            </a>

                            <a href="#" className="btn py-2 btn-outline-light rounded-circle">
                            <i className="fab fa-twitter"></i>
                            </a>

                            <a href="#" className="btn py-2 btn-outline-light rounded-circle">
                            <i className="fab fa-linkedin-in"></i>
                            </a>
                            
                            <a href="#" className="btn py-2 btn-outline-light rounded-circle">
                            <i className="fas fa-globe"></i>
                            </a>

                        </div>
                    </div>

                    <div className="col-md-4">
                        <h4 className="fw-bold mb-3">ABOUT FREELANCER</h4>
                        <div>
                            Freelance is a free to use, licensed Bootstrap theme
                            <br /> created by Route
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        {/* Copyright bottom bar */}
        <div
            className="copyRightFooter py-3"
        >
            <div className="container text-center">
            Copyright © Your Website 2021
            </div>
        </div>
        </footer>
    );
}

export default Footer;
