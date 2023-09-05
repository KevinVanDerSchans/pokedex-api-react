import styled from "styled-components"

export const HeaderStyled = styled.header`

  display: flex;
  width: 100%;
  min-height: 14em;
  justify-content: center;
  align-items: center;

  background-image: url('/pokeball-background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  .header-container {
    display: flex;
    text-align: center;
    width: 100%;
    flex-direction: row;
  }

  .logo-container {
    position: relative;
    padding-right: 230px;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100%;
    margin: 0.8rem 0
  }

  .pokemon-logo {
    width: 24em;
  }

  .danceButtonContainer {
    position: relative;
    top: 120px;
    right: 0px;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
  }

  .danceBtn {
    padding: 8px;
    margin: 15px 0 0 15px;
    font-size: 0.9rem;
    font-family: inherit;
    cursor: pointer;
    background-color: #ba3535;
    color: #f2eeee;
    border: none;
    border-radius: 20px;
    animation: dance 5s infinite;
  }

  .danceBtn:hover {
    background-color: #212121;
  }

  @keyframes dance {
    0%, 100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px) rotate(-5deg);
    }
    50% {
      transform: translateX(5px) rotate(5deg);
    }
    75% {
      transform: translateX(-5px) rotate(-5deg);
    }
  }

  .gifContainer {
    display: flex;
    position: absolute;
    top: 50px;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 440px;
    pointer-events: none;
  }

  .pokemon-dancing-img {
    width: 100px;
  }


   @media (max-width: 990px) {

    .logo-container {
      position: relative;
      left: 28px;
    }

    .pokemon-logo {
      width: 18em;
    }

    .gifContainer {
      display: flex;
      position: absolute;
      top: 50px;
      width: 100%;
      justify-content: center;
      align-items: center;
      gap: 390px;
    }

    .danceButtonContainer {
      position: relative;
      top: 100px;
      width: 100%;
      justify-content: flex-start;
      margin-bottom: 1rem;
      align-items: center;
    }

    .danceBtn {
      padding: 4px;
      margin: 15px 0 0 15px;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 660px) {

    .logo-container {
      position: relative;
      right: 220px;
    }

    .pokemon-logo {
      width: 14em;
    }

    .gifContainer {
      display: flex;
      position: absolute;
      top: 50px;
      width: 100%;
      justify-content: center;
      align-items: center;
      gap: 280px;
    }

    .danceButtonContainer {
      top: 100px;
    }

    .danceBtn {
      width: 9em;
      padding: 8px;
      margin: 15px 0 0 15px;
      font-size: 0.7rem;
    }
  }

  @media (max-width: 530px) {

    .logo-container {
      width: 100%;
      justify-content: center;
      text-align: center;
      position: relative;
    }

    .pokemon-logo {
      width: 12em;
    }

    .gifContainer {
      display: flex;
      position: absolute;
      top: 50px;
      width: 100%;
      justify-content: center;
      align-items: center;
      gap: 200px;
    }

    .danceButtonContainer {
      top: 94px;
    }

    .danceBtn {
      width: 9em;
      padding: 8px;
      margin: 15px 0 0 15px;
      font-size: 0.7rem;
    }
  }

  @media (max-width: 500px) {

    .logo-container {
      position: relative;
      padding-right: 300px;
    }

    .pokemon-logo {
      width: 12em;
    }

    .gifContainer {
      display: flex;
      position: absolute;
      top: 50px;
      width: 100%;
      justify-content: center;
      align-items: center;
      gap: 180px;
    }

    .pokemon-dancing-img {
      width: 80px;
    }

    .danceBtn {
      width: 9em;
      padding: 8px;
      margin: 15px 0 0 15px;
      font-size: 0.7rem;
    }
  }

  @media (max-width: 434px) {

    .pokemon-logo {
      width: 10em;
    }

    .pokemon-dancing-img {
      width: 80px;
    }

    .danceButtonContainer {
      top: 84px;
    }

    .danceBtn {
      width: 9em;
      padding: 8px;
      margin: 15px 0 0 15px;
      font-size: 0.7rem;
    }

    .gifContainer {
      display: flex;
      position: absolute;
      top: 50px;
      width: 100%;
      justify-content: center;
      align-items: center;
      gap: 180px;
    }
  }


  @media (max-width: 370px) {

    .pokemon-logo {
      width: 8em;
    }

    .gifContainer {
      display: flex;
      position: absolute;
      top: 50px;
      width: 100%;
      justify-content: center;
      align-items: center;
      gap: 100px;
    }

  }
`
