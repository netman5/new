import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngellist } from 'react-icons/fa';
import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsMedium,
} from 'react-icons/bs';
import links from '../../utils/links';
import Footer from '../Footer/Footer';
// import SocialIcons from '../Social Icons/SocialIcons';

const Contact = () => {
  const text = "Let's make something great together!";
  return (
    <div className="contact">
      <div className="contact__content">
        <div className="contact__left">
          <div className="left__text">
            <h2>{text}</h2>
            <p>Start by saying hi!</p>
          </div>
          <div className="contact__form">
            <form action="">
              <label htmlFor="name">
                <input type="text" placeholder="Name" name="name" id="name" />
              </label>
              <label htmlFor="email">
                <input type="text" placeholder="Email" name="email" />
              </label>
              <textarea name="" id="" cols="30" rows="10" placeholder="Message" />
              <button type="submit" className="form-btn">Get In Touch</button>
            </form>

            <Footer />
          </div>

        </div>
        <div className="contact__right">
          <div className="contact__info">
            <h2>Contact Info</h2>
            <p>Email: olaishola@hotmail.co.uk</p>
          </div>

          <div className="contact__links contact-links">
            {links.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  style={({ isActive }) => ({
                    color: isActive ? '#65D493' : '',
                    borderBottom: isActive ? '1px solid #65D493' : '',
                    transform: isActive ? 'translateX(0)' : 'translateX(-10%)',
                  })}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </div>
          <div className="social-icons">
            <a href="https://github.com/netman5" target="_blank" rel="noopener noreferrer">
              <BsGithub className="social-icons__icon" />
            </a>
            <a href="https://www.linkedin.com/in/ola-ishola/" target="_blank" rel="noopener noreferrer">
              <BsLinkedin className="social-icons__icon" />
            </a>
            <a href="https://twitter.com/Orlaish" target="_blank" rel="noopener noreferrer">
              <BsTwitter className="social-icons__icon" />
            </a>
            <a href="https://olaishola.medium.com/" target="_blank" rel="noopener noreferrer">
              <BsMedium className="social-icons__icon" />
            </a>
            <a href="https://angel.co/u/ola-ishola-1" target="_blank" rel="noopener noreferrer">
              <FaAngellist className="social-icons__icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
