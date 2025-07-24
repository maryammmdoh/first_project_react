import React from 'react'
import avatar from "../assets/avatar.svg";


function Home() {
  return (
    <section className="hero">
      <img
        src={avatar}
        alt="Avatar"
        className="home-avatar"
      />

      <h1 className="title">START FRAMEWORK</h1>

      <div className="divider-star">
        <i className="fa-solid fa-star"></i>
      </div>

      <div className="home-subtitle">
        Graphic Artist - Web Designer - Illustrator
      </div>
    </section>
  );
}

export default Home;