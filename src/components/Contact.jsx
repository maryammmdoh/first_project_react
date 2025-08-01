import React from 'react';

function Contact() {
  return (
    <section className="contact-section py-5" >
      <div className="container" >
        <h2 className="contact-title text-center mb-2">
          CONTACT SECTION
        </h2>
        <div className="contact-divider mx-auto mb-5">
          <i className="fa-solid fa-star"></i>
        </div>

        <form className="contact-form mx-auto ">
          <div className="floating-input-group mb-4">
            <input type="text" id="username" name="username" className="floating-input custom-input" placeholder=" " />
            <label htmlFor="username">UserName</label>
          </div>

          <div className="floating-input-group mb-4">
            <input type="number" id="age" name="age" className="floating-input custom-input" placeholder=" " />
            <label htmlFor="age">Age</label>
          </div>

          <div className="floating-input-group mb-4">
            <input type="email" id="email" name="email" className="floating-input custom-input" placeholder=" " />
            <label htmlFor="email">Email</label>
          </div>

          <div className="floating-input-group mb-4">
            <input type="password" id="password" name="password" className="floating-input custom-input" placeholder=" " />
            <label htmlFor="password">Password</label>
          </div>

          <button type="submit" className="btn contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
