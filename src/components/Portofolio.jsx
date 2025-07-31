import React, { useState, useEffect } from "react";

import first from "../assets/poert1.png";
import second from "../assets/port2.png";
import third from "../assets/port3.png";

function Portofolio() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  const [imgSrc, setImgSrc] = useState("");
  const [isLayerVisible, setIsLayerVisible] = useState(false);

  function display(src) {
    setImgSrc(src);
    setIsLayerVisible(true);
  }

  function hideLayer() {
    setIsLayerVisible(false);
  }

  const images = [first, second, third, first, second, third];
  return (
    <>
      <section className="portofolio py-5">
        <h1 className="titlep mb-4 text-center">PORTFOLIO COMPONENT</h1>
        <div className="divider-star-p mb-4 text-center">
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="container">
          <div className="row g-4 justify-content-center">
            {images.map((img, index) => (
              <div
                className="col-12 col-md-4 d-flex justify-content-center"
                key={index}
              >
                <div
                  className="portfolio-box d-flex align-items-center justify-content-center"
                  onClick={() => display(img)}
                >
                  <div className="portfolio-image-wrapper position-relative">
                    <img
                      src={img}
                      className="portfolio-img"
                    />
                    <div className="portfolio-overlay d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-plus fa-5x text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Modal Layer */}
      {isLayerVisible ? (
        <div
          className="modal fade show d-block"
          onClick={hideLayer}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="w-50 modal-dialog modal-lg"
            onClick={(e) => e.stopPropagation()} //To prevent closing when clicking inside the modal
          >
            <div className="modal-content bg-transparent border-0">
              <button
                type="button"
                className="btn-close btn-close-white ms-auto me-2 mt-2"
                onClick={hideLayer}
              ></button>
              <img
                src={imgSrc}
                className="  rounded shadow"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Portofolio;
