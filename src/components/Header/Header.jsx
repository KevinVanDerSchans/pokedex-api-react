import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyled } from "./HeaderStyled"
import SearchBar from "../SearchBar/SearchBar";
import { Player } from "../Player/Player"

const Header = () => {
  return (
    <HeaderStyled>
      <div className="header-container">

        <div className="logo-container">
          <Link to={'/'}>
            <img src="/pokemon-logo.svg" className="pokemon-logo" alt="Pokemon Logo" />
          </Link>
        </div>

        <div
          className="searcher-and-music-container"
          style={{
            width: '100%'
          }}
        >
          <Player />
          <SearchBar />
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;