import React from "react";
import { AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-socials">
        <a
          href="https://www.linkedin.com/in/avi-vovgen-0b7119200/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/vov62"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.facebook.com/avi.vovgen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillFacebook />
        </a>
      </div>
      <div className="footer-copyright">
        <p>&copy; A-V, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
