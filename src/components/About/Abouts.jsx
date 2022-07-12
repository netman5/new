/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Element } from 'react-scroll';
import {
  SiJavascript, SiRedux, SiHtml5, SiCss3,
  SiMaterialui, SiTailwindcss, SiTypescript, SiRubyonrails,
  SiHeroku, SiVercel, SiVisualstudiocode, SiNetlify,
} from 'react-icons/si';
import {
  FaReact, FaSass, FaBootstrap, FaNpm, FaServer,
} from 'react-icons/fa';
import {
  DiResponsive, DiNodejs, DiMongodb, DiGit, DiRuby, DiPostgresql,
} from 'react-icons/di';

import { AiFillApi } from 'react-icons/ai';
import {
  BsGithub, BsFillTerminalFill, BsTools,
} from 'react-icons/bs';

import { BiCodeAlt } from 'react-icons/bi';

const Abouts = () => (
  <Element name="about" id="about">
    <section className="about">
      <h2>About & Tech Stacks</h2>
      <div className="about-container">
        <div className="about-container__skills">
          <div className="about-container__skills__item">
            <div className="about-container__skills__top">
              <h3 className="about-container__skills__item__title">Frontend</h3>
              <BiCodeAlt className="about-container__skills__item_top__icon" />
            </div>
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
                <SiMaterialui className="about-container__skills__item__list__item__icon" />
                <SiTailwindcss className="about-container__skills__item__list__item__icon" />
                <FaBootstrap className="about-container__skills__item__list__item__icon" />
                <SiTypescript className="about-container__skills__item__list__item__icon" />
              </li>
            </ul>
          </div>

          <div className="about-container__skills__item">
            <div className="about-container__skills__top">
              <h3 className="about-container__skills__item__title">Backend</h3>
              <FaServer className="about-container__skills__item_top__icon" />
            </div>
            <p>Experienced building backend APIs and services with below techs</p>
            <ul className="about-container__skills__item__list">
              <li className="about-container__skills__item__list__item">
                <DiNodejs className="about-container__skills__item__list__item__icon" />
                <DiRuby className="about-container__skills__item__list__item__icon" />
                <SiRubyonrails className="about-container__skills__item__list__item__icon" />
                <DiMongodb className="about-container__skills__item__list__item__icon" />
                <DiPostgresql className="about-container__skills__item__list__item__icon" />
                <AiFillApi className="about-container__skills__item__list__item__icon" />
              </li>
            </ul>
          </div>

          <div className="about-container__skills__item">
            <div className="about-container__skills__top">
              <h3 className="about-container__skills__item__title">Tools</h3>
              <BsTools className="about-container__skills__item_top__icon" />
            </div>
            <ul className="about-container__skills__item__list">
              <li className="about-container__skills__item__list__item">
                <DiGit className="about-container__skills__item__list__item__icon" />
                <BsGithub className="about-container__skills__item__list__item__icon" />
                <BsFillTerminalFill className="about-container__skills__item__list__item__icon" />
                <SiHeroku className="about-container__skills__item__list__item__icon" />
                <SiVercel className="about-container__skills__item__list__item__icon" />
                <SiVisualstudiocode className="about-container__skills__item__list__item__icon" />
                <SiNetlify className="about-container__skills__item__list__item__icon" />
                <FaNpm className="about-container__skills__item__list__item__icon" />
              </li>
            </ul>
          </div>
        </div>
        <div className="about-container__intro">
          <h4>About Me</h4>
          <div className="about-container__intro__box">
            <h3 className="about-container__intro__box__title">Hello! I'm Ola Ishola</h3>
            <div className="about-container__intro__content">
              <p>
                A graduate of Microverse Full Stack development course,
                a remote software development school that allows devs
                from all over the world to pair-program and build projects together. I've
                spent the last several months working on a number of projects ranging
                from a landing page to web applications
                using JavaScript, HTML, CSS, MongoDB, Nodejs, React, Redux,
                Ruby on Rails, Express, and Bootstrap.
              </p>
              <button type="button" className="about-container__intro__content__btn">
                <a
                  href="https://docs.google.com/document/d/1Iu-eYgyRERKkkkg7YppTUpA92yHGUTbGgzgyYn4NFzM/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click here to view my resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Element>
);

export default Abouts;
