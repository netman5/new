import React from 'react';
import {
  SiJavascript, SiRedux, SiHtml5, SiCss3,
} from 'react-icons/si';
import { FaReact, FaSass } from 'react-icons/fa';
import {
  DiResponsive, DiNodejs, DiMongodb, DiGit,
} from 'react-icons/di';

const Abouts = () => (
  <section className="about">
    <h2>About</h2>
    <div className="about-container">
      <div className="about-container__skills">
        <div className="about-container__skills__item">
          <h3 className="about-container__skills__item__title">Frontend</h3>
          <p>Experienced building frontend application with following technologies</p>
          <ul className="about-container__skills__item__list">
            <li className="about-container__skills__item__list__item">
              <SiHtml5 className="about-container__skills__item__list__item__icon" />
              <SiCss3 className="about-container__skills__item__list__item__icon" />
              <FaSass className="about-container__skills__item__list__item__icon" />
              <DiResponsive className="about-container__skills__item__list__item__icon" />
              <SiJavascript className="about-container__skills__item__list__item__icon" />
              <FaReact className="about-container__skills__item__list__item__icon" />
              <SiRedux className="about-container__skills__item__list__item__icon" />
              <DiGit className="about-container__skills__item__list__item__icon" />
            </li>
          </ul>
        </div>

        <div className="about-container__skills__item">
          <h3 className="about-container__skills__item__title">Backend</h3>
          <p>Experienced building backend APIs and services with</p>
          <ul className="about-container__skills__item__list">
            <li className="about-container__skills__item__list__item">
              <DiNodejs className="about-container__skills__item__list__item__icon" />
              <DiMongodb className="about-container__skills__item__list__item__icon" />
            </li>
          </ul>
        </div>
      </div>
      <div className="about-container__intro">
        <p>Me</p>
      </div>
    </div>
  </section>
);

export default Abouts;
