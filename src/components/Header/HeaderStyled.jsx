import styled from "styled-components"

export const HeaderStyled = styled.header`

  display: flex; /* Activar flexbox en el contenedor principal */
  align-items: center; /* Centrar verticalmente los elementos */

  background-image: url('/pokeball-background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  .header-container {
    display: flex;
  }

  .logo-container {
    display: flex;
    justify-content: left;
    text-align: center;
  }

  .pokemon-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-content: center;
    width: 24em;
  }

  .danceButtonContainer {
    width: 20%;
    display: flex;
    justify-content: left;
    right: 1.8rem;
    margin-bottom: 1rem;
  }

  .danceBtn {
    padding: 18px;
    margin: 15px 0 0 15px;
    font-size: 1.4rem;
    font-family: inherit;
    cursor: pointer;
    background-color: #ba3535;
    color: white;
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
    gap: 450px;
    pointer-events: none;
  }
`
