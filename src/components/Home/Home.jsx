/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import SocialIcons from '../Social Icons/SocialIcons';

const Home = () => {
  const temp = 'Hello World';
  return (
    <div className="home-container">
      <div className="home-container__info">
        <div className="home-container__info__box">
          <div className="home-container__info__content">
            <h1 className="home-container__info__title">FullStack Developer</h1>
            <h2 className="home-container__info__title__two">
              Hi! I help business
              <span>Write customer centric app & logic that scale.</span>
            </h2>
            <p>I turn a design into a beautifully simple code, and I love what I do.</p>

            <div className="home-container__info__buttons">
              <a href="https://www.linkedin.com/in/ola-ishola/" target="_blank" rel="noreferrer" className="btn">Let's Connect</a>
            </div>
          </div>
          <div className="home-container__info__image">
            <div>
              {temp}
            </div>
          </div>
        </div>

        <SocialIcons />
      </div>
    </div>
  );
};

export default Home;
