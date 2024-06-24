import React from 'react';
import '../styles/home.css';

const Home = () => {
  return (
    <div>
      <div className="nav__container">
        <div className="logo">Abhisek Sah</div>
        <div className="menu">
          <a href="/about">About us</a>
          <a href="/login">Login</a>
          <a href="/signup">SignUp</a>
        </div>
        <div className="search">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search..."
            autoComplete="false"
          />
        </div>
      </div>
      <main className="container">
        <h1>Technology</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quam
          repellat alias dolor, praesentium asperiores dolores voluptatem
          molestiae molestias enim ipsa! Officia nobis adipisci, sit quasi illo
          cumque odio eos.
        </p>
        <button>More info...</button>
        <div className="icons">
          <i className="fa-brands fa-facebook" />
          <i className="fa-brands fa-youtube" />
          <i className="fa-brands fa-twitter" />
          <i className="fa-brands fa-instagram" />
        </div>
      </main>
    </div>
  );
};

export default Home;
