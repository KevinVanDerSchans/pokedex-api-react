import { useState, useEffect } from 'react';

import AudioPlayer from 'react-modern-audio-player';
import { PlayerStyled } from './PlayerStyled';

const playList = [
  {
    id: 1,
    name: 'Littleroot Town',
    img: '/player-pokeball.jpg',
    src: '/littleroot-town.mp3',
  }
]

const mobileUI = {
  all: false,
  playButton: true,
  playList: true,
  prevNnext: true,
  volume: true,
  volumeSlider: true,
  repeatType: false,
  trackTime: false,
  trackInfo: false,
  artwork: false,
  progress: false,
};

export function Player() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResizeWindow);
    return () => {

    window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <div className='player-container'>
    <PlayerStyled>

      <AudioPlayer
        className="player"
        playList={playList}
        activeUI={screenWidth < 800 ? mobileUI : {
          all: true,
          progress: "waveform",
        }}
      />
    </PlayerStyled>
    </div>
  );
};
