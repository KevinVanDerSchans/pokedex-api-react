import './Footer.css';
import {
  AiFillLinkedin,

   }
from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="text-footer-container">
        <span className="developer-name">Kevin Schans</span>
      </div>

      <div className="social-media-footer-container">

        <a href="" target="_blank">
          <AiFillLinkedin className="linkedin-logo"/>
        </a>

      </div>
    </footer>
  );
};

export default Footer;
