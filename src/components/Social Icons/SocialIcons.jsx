import React from 'react';
import { FaAngellist } from 'react-icons/fa';
import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsMedium,
} from 'react-icons/bs';
import User from '../../images/download.png';

const SocialIcons = () => {
  const image = User;
  return (
    <div className="social">
      <div className="social-image">
        <img src={image} alt="Ola Ishola" />
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
  );
};

export default SocialIcons;
