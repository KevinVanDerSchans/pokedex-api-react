import styled from 'styled-components';

export const FooterStyled = styled.footer`

  display: flex;
  position: relative;
  max-width: 100%;
  height: 44px;
  justify-content: center;
  align-items: center;
  padding: 4px 0;
  color: rgb(192, 186, 186);
  background-color: rgb(80, 79, 79);
  overflow: hidden;

  .text-footer-container {
    text-align: center;
  }

  .developer-name {
    font-size: 1.4rem;
    font-weight: 400;
    cursor: default;
  }

  .social-media-footer-container {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    margin: 2px 30px 0 0;
    gap: 0.4rem;
  }

  .linkedin-logo,
  .github-logo,
  .user-logo {
    position: relative;
    bottom: 0;
    left: 1rem;
    color: rgb(232, 228, 228);
    font-size: 2.2rem;
  }

  .linkedin-logo:hover,
  .github-logo:hover,
  .user-logo:hover {
    color: #e6b7b7;
  }

  @media screen and (max-width: 505px) {

    .developer-name {
      font-size: 1.2rem;
    }

    .linkedin-logo,
    .github-logo,
    .user-logo {
      position: relative;
      top: 6px;
      left: 1.2rem;
      height: 100%;
      align-items: center;
      font-size: 1.4rem;

    }
  }

  @media screen and (max-width: 440px) {

    .developer-name {
      font-size: 1.1rem;
    }

    .linkedin-logo,
    .github-logo,
    .user-logo {
      position: relative;
      top: 5.4px;
      left: 1.4rem;
      height: 100%;
      align-items: center;
      font-size: 1.4rem;

    }
  }

  @media screen and (max-width: 380px) {

    .developer-name {
      font-size: 1rem;
    }

    .linkedin-logo,
    .github-logo,
    .user-logo {
      position: relative;
      top: 8px;
      right: 0;
      height: 100%;
      align-items: center;
      font-size: 1.2rem;
      margin-right: 4px;
    }
  }
`;

