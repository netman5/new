/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import SocialIcons from '../Social Icons/SocialIcons';
import WebImage from '../../images/web1.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-container__info">
        <div className="home-container__info__box">
          <div className="home-container__info__content" data-aos="fade-right">
            <h1 className="home-container__info__title">FullStack Developer</h1>
            <h2 className="home-container__info__title__two">
              Hello! I help businesses
              <span>Write customer centric app & logic that scale.</span>
            </h2>
            <p>
              I turn a design into a beautifully simple & functional code, with an analytical
              approach to developing useful solutions, enjoys building eye-catchy
              accessible user interfaces. and I love what I do.

            </p>

            <div className="home-container__info__buttons">
              <a href="https://www.linkedin.com/in/ola-ishola/" target="_blank" rel="noreferrer" className="btn">Let's Connect</a>
            </div>
          </div>
          <div className="home-container__info__image" data-aos="fade-left">
            <div className="home-container__info__image__imgcontainer">
              <img src={WebImage} alt="Web Illustration" />
            </div>
          </div>
        </div>

        <SocialIcons />
      </div>
    </div>
  );
};

export default Home;
