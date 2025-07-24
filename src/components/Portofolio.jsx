import React from "react";

import first from "../assets/poert1.png";
import second from "../assets/port2.png";
import third from "../assets/port3.png";

function Portofolio() {
  return (
    <section className="portofolio py-5">
      <h1 className="titlep mb-4">PORTFOLIO COMPONENT</h1>
      <div className="divider-star-p mb-4">
        <i className="fa-solid fa-star"></i>
      </div>
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="portfolio-box d-flex align-items-center justify-content-center">
              <div className="portfolio-image-wrapper position-relative">
                <img src={first} alt="Gallery 1" className="portfolio-img" />
                <div className="portfolio-overlay d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus fa-5x text-white"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="portfolio-box d-flex align-items-center justify-content-center">
              <div className="portfolio-image-wrapper position-relative">
                <img src={third} alt="Gallery 2" className="portfolio-img" />
                <div className="portfolio-overlay d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus fa-5x text-white"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="portfolio-box d-flex align-items-center justify-content-center">
              <div className="portfolio-image-wrapper position-relative">
                <img src={second} alt="Gallery 3" className="portfolio-img" />
                <div className="portfolio-overlay d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus fa-5x text-white"></i>
                </div>
              </div>
            </div>
          </div>
          {/* Second row */}
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="portfolio-box d-flex align-items-center justify-content-center">
              <div className="portfolio-image-wrapper position-relative">
                <img src={first} alt="Gallery 4" className="portfolio-img" />
                <div className="portfolio-overlay d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus fa-5x text-white"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="portfolio-box d-flex align-items-center justify-content-center">
              <div className="portfolio-image-wrapper position-relative">
                <img src={third} alt="Gallery 5" className="portfolio-img" />
                <div className="portfolio-overlay d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus fa-5x text-white"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="portfolio-box d-flex align-items-center justify-content-center">
              <div className="portfolio-image-wrapper position-relative">
                <img src={second} alt="Gallery 6" className="portfolio-img" />
                <div className="portfolio-overlay d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus fa-5x text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portofolio;
