// import Link from "react-router-dom"
import { HeaderStyled } from "./HeaderStyled"

import './Header.css'

const Header = () => {
  return (
    <HeaderStyled>
      <div className="logo-container">
        <img src="/pokemon-logo.svg" className="pokemon-logo" alt="Pokemon Logo" />
      </div>
    </HeaderStyled>
  );
};

export default Header;
