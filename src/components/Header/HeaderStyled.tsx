import styled from "styled-components"

export const HeaderStyled = styled.header`

  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 14px;
  background-image: url('/pokeball-background.png');
  background-repeat: none;
  background-size: cover;
  background-position: center;

  .header-container {
    display: flex;
    text-align: center;
    width: 100%;
    flex-direction: column;
  }

  .logo-container {
    margin-top: 1rem;
  }

  .pokemon-logo {
    width: 24em;
  }

  .searcher-and-music-container {
    position: relative;
    z-index: 99;
  }
`
