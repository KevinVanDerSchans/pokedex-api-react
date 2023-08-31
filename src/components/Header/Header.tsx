import Link from "react-router-dom"
import { HeaderStyled } from "./HeaderStyled"

import './Header.css'

const Header = () => {
  return (
    <HeaderStyled>
      <Link to={'/'}>
        <img src="/assets/pokemon-logo.svg" alt="Pokemon Logo" />
      </Link>

    </HeaderStyled>
  )
}

export default Header;
