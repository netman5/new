import React from 'react';
import { Element, Link } from 'react-scroll';
import { FaAngellist } from 'react-icons/fa';
import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsMedium,
} from 'react-icons/bs';
import { useForm, ValidationError } from '@formspree/react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../features/modal/modalSlice';
import links from '../../utils/links';
import Footer from '../Footer/Footer';

const Contact = () => {
  const text = "Let's make something great together!";
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_ID);
  const dispatch = useDispatch();

  if (state.succeeded) {
    dispatch(openModal());
    return 'hello';
  }

  return (
    <Element name="contact" id="contact">
      {/* {state.succeeded && dispatch(openModal())} */}
      <div className="contact">
        <div className="contact__content">
          <div className="contact__left">
            <div className="left__text">
              <h2>{text}</h2>
              <p>Start by saying hi!</p>
            </div>
            <div className="contact__form">
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                  <input type="text" placeholder="Name" name="name" id="name" />
                </label>
                <label htmlFor="email">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    id="email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <button type="submit" className="form-btn" disabled={state.submitting}>Get In Touch</button>
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
                  <Link
                    to={link.path}
                    // style={({ isActive }) => ({
                    //   color: isActive ? '#65D493' : '',
                    //   borderBottom: isActive ? '1px solid #65D493' : '',
                    //   transform: isActive ? 'translateX(0)' : 'translateX(-10%)',
                    // })}
                  >
                    {link.name}
                  </Link>
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
    </Element>
  );
};

export default Contact;
