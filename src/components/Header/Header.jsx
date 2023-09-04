import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyled } from "./HeaderStyled";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { FaPlay, FaStop } from "react-icons/fa";

const Header = () => {

  const [showGifs, setShowGifs] = useState(false);

  const toggleShowGifs = () => {
    setShowGifs(!showGifs)
  }

  return (

    <HeaderStyled>
      <div className="header-container">

        <div className="logo-container">
          <Link to={'/'}>
            <img src="/pokemon-logo.svg" className="pokemon-logo" alt="Pokemon Logo" />
          </Link>
        </div>

        <div>
          <div className="danceButtonContainer">
            <Button
                variant={showGifs ? "outline-danger" : "outline-success"}
                onClick={toggleShowGifs}
                className="danceBtn"
            >
                {showGifs ? "Use Rest attack... " : "Use Dance attack ! "}
                {showGifs ? <FaStop size={15} /> : <FaPlay size={15} />}
            </Button>
          </div>
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
      </div>
    </HeaderStyled>
  );
};

export default Header;
