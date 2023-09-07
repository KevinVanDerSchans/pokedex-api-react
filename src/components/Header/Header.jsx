import { Link } from "react-router-dom";
import { HeaderStyled } from "./HeaderStyled";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { FaPlay, FaStop } from "react-icons/fa";

const Header = () => {

  const [showGifs, setShowGifs] = useState(false);

  const toggleShowGifs = () => {
    setShowGifs(!showGifs)
  };

  const audioGameboy = '/assets/gameboy.mp3'

  const playAudioGameboy = () => {
    const audio = new Audio(audioGameboy);
    audio.play();
  };

  return (

    <HeaderStyled>
      <div className="header-container">

      <div>
          <div className="danceButtonContainer">
            <Button
                variant={showGifs ? "outline-danger" : "outline-success"}
                onClick={toggleShowGifs}
                className="danceBtn"
            >
                {showGifs ? "Use REST attack... " : "Use DANCE attack ! "}
                {showGifs ? <FaStop size={15} /> : <FaPlay size={15} />}
            </Button>
          </div>
        </div>

        <div className="logo-container">
          <Link onClick={playAudioGameboy} to={'/'}>
            <img width={'30em'} src="/pokemon-logo.svg" className="pokemon-logo" alt="Pokemon Logo" />
          </Link>
        </div>

        {showGifs && (
          <div className="gifContainer">
            <div className="dancingPokemonContainer">
              <img className="pokemon-dancing-img" src="/assets/dance1.gif" alt="Pokemon dancing" />
            </div>

            <div className="dancingPokemonContainer">
              <img className="pokemon-dancing-img" id="pikaGif" src="/assets/dance3.gif" alt="Pokemon dancing" />
            </div>
          </div>
        )}
      </div>
    </HeaderStyled>
  );
};

export default Header;
