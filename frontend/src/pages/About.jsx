import '../styles/about.css';
import React from 'react';

const About = () => {
  return (
    <>
      {/*=============== REMIXICONS ===============*/}
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      {/*==================== ABOUT ====================*/}
      <section className="about section" id="about">
        <div className="about__container container grid">
          <h2 className="section__title-1">
            <span>About Me.</span>
          </h2>
          <div className="about__perfil">
            <div className="about__image">
              <img
                src="../../DSC_0039.JPG"
                alt="image"
                className="about__img"
              />
              <div className="about__shadow" />
              <div className="geometric-box" />
              <div className="about__box" />
            </div>
          </div>
          <div className="about__info">
            <p className="about__description">
              Passionate about creating <b>Web Pages</b> with
              <b>UI/UX User Interface</b>, I have years of experience and many
              clients are happy with the projects carried out.
            </p>
            <ul className="about__list">
              <li className="about__item">
                <b>My Skills Are:</b> HTML, CSS, JavaScript, React, Git &amp;
                GitHub, Bootstrap, Flutter &amp; Figma.
              </li>
            </ul>
            <div className="about__buttons">
              <a href="/contact" className="button">
                <i className="ri-send-plane-line" /> Contact Me
              </a>
              <a
                href="https://www.linkedin.com/in/abhisek-sah-429140238/"
                target="_blank"
                className="button__ghost"
              >
                <i className="ri-linkedin-box-line" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
