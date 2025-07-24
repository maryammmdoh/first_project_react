import React from "react";

function About() {
  return (
    <section className="hero">
      <h1 className="title">ABOUT COMPONENT</h1>

      <div className="divider-star">
        <i className="fa-solid fa-star"></i>
      </div>

      <div className="about-subtitle">
        <div className="container">
          <div className="row">
            <div className="text-white text-start col-md-6 mb-3 mb-md-0">
              <div>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </div>
            </div>

            <div className="text-white text-start col-md-6 mb-3 mb-md-0">
              <div>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
