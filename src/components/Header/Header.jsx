import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyled } from "./HeaderStyled";

const Header = ({ showGifs }) => {

  return (

    <HeaderStyled>
      <div className="header-container">

        <div className="logo-container">
          <Link to={'/'}>
            <img src="/pokemon-logo.svg" className="pokemon-logo" alt="Pokemon Logo" />
          </Link>
        </div>

        {showGifs && (
          <div className="gifContainer">
            <div className="dancingPokemonContainer">
              <img style={{ width: "100px" }} src="/dance1.gif" alt="Pokemon dancing" />
            </div>

            <div className="dancingPokemonContainer">
              <img style={{ width: "140px" }} id="pikaGif" src="/dance2.gif" alt="Pokemon dancing" />
            </div>
          </div>
        )}

        <div
          className="searcher-and-music-container"
          style={{
            width: '100%'
          }}
        >
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
