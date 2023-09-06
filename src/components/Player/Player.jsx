import { useState, useEffect } from 'react';
import AudioPlayer from 'react-modern-audio-player';
import { PlayerStyled } from './PlayerStyled';

const playList = [
  {
    id: 1,
    name: 'Opening',
    img: '/player-pokeball.jpg',
    src: '/assets/opening.mp3',
  },
  {
    id: 2,
    name: 'Littleroot Town',
    img: '/player-pokeball.jpg',
    src: '/assets/littleroot-town.mp3',
  },
  {
    id: 3,
    name: 'Pokemon Rap',
    img: '/player-pokeball.jpg',
    src: '/assets/pokemon-rap.mp3',
  },
  {
    id: 4,
    name: 'Combat',
    img: '/player-pokeball.jpg',
    src: '/assets/combat.mp3',
  },
  {
    id: 5,
    name: 'Team Rocket',
    img: '/player-pokeball.jpg',
    src: '/assets/team-rocket.mp3',
  },
  {
    id: 6,
    name: 'Games intro',
    img: '/player-pokeball.jpg',
    src: '/assets/games.mp3',
  }
];

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
        autoPlay={true}
        activeUI={screenWidth < 700 ? mobileUI : {
          all: true,
          progress: "waveform",
        }}
      />
    </PlayerStyled>
    </div>
  );
};
