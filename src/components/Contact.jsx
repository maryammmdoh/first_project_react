import React from 'react'

function Contact() {
  return (
    <section className="contact-section py-5">
      <div className="container">
        <h2 className="contact-title text-center mb-2">CONATCT SECTION</h2>
        <div className="contact-divider mx-auto mb-5">
          <i className="fa-solid fa-star"></i>
        </div>
        <form className="mx-auto contact-form">

          <div className="form-floating mb-4">
            <input type="text" className="form-control custom-input" placeholder="userName" />
            <label htmlFor="userName">userName</label>
          </div>

          <div className="form-floating mb-4">
            <input type="number" className="form-control custom-input" placeholder="userAge" />
            <label htmlFor="userAge">userAge</label>
          </div>

          <div className="form-floating mb-4">
            <input type="email" className="form-control custom-input" placeholder="userEmail" />
            <label htmlFor="userEmail">userEmail</label>
          </div>

          <div className="form-floating mb-4">
            <input type="password" className="form-control custom-input" placeholder="userPassword" />
            <label htmlFor="userPassword">userPassword</label>
          </div>

          <button type="submit" className="btn contact-btn">send Message</button>

        </form>
      </div>
    </section>
  );
}
export default Contact;