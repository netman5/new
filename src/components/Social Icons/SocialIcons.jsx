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
        <BsGithub className="social-icons__icon" />
        <BsLinkedin className="social-icons__icon" />
        <BsTwitter className="social-icons__icon" />
        <BsMedium className="social-icons__icon" />
        <FaAngellist className="social-icons__icon" />
      </div>
    </div>
  );
};

export default SocialIcons;
