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
    top: 90px;
    right: 24px;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
  }

  .danceBtn {
    padding: 8px;
    margin: 15px 0 0 15px;
    font-size: 1.4rem;
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
      right: 24px;
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


    @media (max-width: 652px) {

      .logo-container {
        position: absolute;
        text-align: center;
      }

      .pokemon-logo {
        width: 12em;
      }

      .danceButtonContainer {
        position: relative;
        padding: 2rem 2rem;
        top: 80px;
        right: 32px;
        width: 10em;
        justify-content: flex-start;
        align-items: center;
      }

      .danceBtn {
        font-size: 0.7rem;
      }

      .gifContainer {
        top: 50px;
        width: 100%;
        gap: 300px;
      }
    }


    @media (max-width: 550px) {

      .logo-container {
        display: flex;
        justify-content: center;
        position: relative;
        right: 200px;
      }

      .pokemon-logo {
        width: 10em;
      }

      .danceButtonContainer {
        position: relative;
        padding: 2rem 2rem;
        top: 80px;
        right: 32px;
        width: 10em;
        justify-content: flex-start;
        align-items: center;
      }

      .danceBtn {
        font-size: 0.8rem;
      }

      .gifContainer {
        top: 50px;
        width: 100%;
        justify-content: center;
        align-items: center;
        gap: 200px;
      }

      .pokemon-dancing-img {
        width: 100px;
      }
    }

    @media (max-width: 400px) {

      .logo-container {
        position: absolute;
        left: 110px;
      }

      .pokemon-logo {
        width: 10em;
      }

      .gifContainer {
        top: 50px;
        width: 100%;
        justify-content: center;
        align-items: center;
        gap: 160px;
      }
    }
  }
`
