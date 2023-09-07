import {
  AiFillLinkedin,
  AiFillGithub
} from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";

import { FooterStyled } from "./FooterStyled";


const Footer = () => {
  return (
    <FooterStyled>
      <footer className="footer">

        <div className="text-footer-container">
          <span className="developer-name">Kevin Schans</span>
        </div>

        <div className="social-media-footer-container">

          <a href="https://www.linkedin.com/in/kevinvanderschans" target="_blank">
            <AiFillLinkedin
              className="linkedin-logo"
              aria-label="Icon for LinkedIn's link"
            />
          </a>

          <a href="https://github.com/KevinVanDerSchans" target="_blank">
            <AiFillGithub
              className="github-logo"
              aria-label="Icon for Github's link"
            />
          </a>

          <a href="" target="_blank">
            <BiSolidUser
              className="user-logo"
              aria-label="Icon for Portfolio's link"
            />
          </a>

        </div>
      </footer>
    </FooterStyled>
  );
};

export default Footer;
