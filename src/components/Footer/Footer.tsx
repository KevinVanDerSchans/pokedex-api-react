import {
  AiFillLinkedin,
} from "react-icons/ai";
import { FooterStyled } from "./FooterStyled";

const Footer = () => {
  return (
    <FooterStyled>
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
    </FooterStyled>
  );
};

export default Footer;
