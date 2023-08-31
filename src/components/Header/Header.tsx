import { Link } from "react-router-dom"
import { HeaderStyled } from "./HeaderStyled"


const Header = () => {
  return (
    <HeaderStyled>
      <Link to={'/'}>
      <div className="logo-container">
          <img src="/pokemon-logo.svg" className="pokemon-logo" alt="Pokemon Logo" />
      </div>
      </Link>
    </HeaderStyled>
  );
};

export default Header;
