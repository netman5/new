import React from 'react';
import { NavLink } from 'react-router-dom';
import links from '../../utils/links';
import Footer from '../Footer/Footer';
import SocialIcons from '../Social Icons/SocialIcons';

const Contact = () => {
  const text = "Let's make something great together!";
  return (
    <div className="contact">
      <div className="contact__content">
        <div className="contact__left">
          <h2>{text}</h2>
          <div className="contact__form">
            <form action="">
              <label htmlFor="name">
                <input type="text" placeholder="Name" name="name" id="name" />
              </label>
              <label htmlFor="email">
                <input type="text" placeholder="Email" name="email" />
              </label>
              <textarea name="" id="" cols="30" rows="10" placeholder="Message" />
              <button type="submit" className="form-btn">Send</button>
            </form>

            <Footer />
          </div>

        </div>
        <div className="contact__right">
          <div className="contact__info">
            <h2>Contact Info</h2>
            <p>olaishola@hotmail.co.uk</p>
          </div>

          <div className="contact__links">
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
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default Contact;
