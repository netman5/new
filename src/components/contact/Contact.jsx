import React, { useState } from 'react';
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
  const dispatch = useDispatch();
  const text = "Let's make something great together!";
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_ID);
  const [inputVal, setInputVal] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name } = e.target;
    setInputVal({ ...inputVal, [name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (state.succeeded) {
      return openModal();
    }
    setInputVal({
      name: '',
      email: '',
      message: '',
    });
    return dispatch(openModal());
  };

  return (
    <Element name="contact" id="contact">
      <div className="contact">
        <div className="contact__content">
          <div className="contact__left">
            <div
              className="left__text"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h2>{text}</h2>
              <p>Start by saying hi!</p>
            </div>
            <div
              className="contact__form"
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-easing="ease-in-sine"
            >
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    id="name"
                    value={inputVal.name}
                    onChange={handleInputChange}
                  />
                </label>

                <label htmlFor="email">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    id="email"
                    value={inputVal.email}
                    onChange={handleInputChange}
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
                  value={inputVal.message}
                  onChange={handleInputChange}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <button
                  type="submit"
                  className="form-btn"
                  disabled={state.submitting}
                  onClick={(e) => handleSubmitForm(e)}
                >
                  Get In Touch
                </button>
              </form>

              <Footer />
            </div>

          </div>
          <div className="contact__right">
            <div className="contact__info">
              <h2 data-aos="fade-down">Contact Info</h2>
              <p data-aos="fade-down">Email: olaishola@hotmail.co.uk</p>
            </div>

            <div
              className="contact__links contact-links"
              data-aos="fade-down"
            >
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
            <div
              className="social-icons"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
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
