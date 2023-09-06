import styled from 'styled-components';

export const FooterStyled = styled.footer`

  display: flex;
  position: relative;
  max-width: 100%;
  height: 44px;
  justify-content: center;
  align-items: center;
  padding: 4px 0;
  color: #1e1d1d;
  background-color: #c47979;
  overflow: hidden;

  .text-footer-container {
    text-align: center;
  }

  .developer-name {
    font-size: 1.4rem;
    font-weight: 400;
  }

  .social-media-footer-container {
    display: flex;
    position: absolute;
    top: 2px;
    right: 24px;
    margin: 2px 30px 0 0;
    gap: 0.6rem;
  }

  .linkedin-logo,
  .github-logo,
  .user-logo {
    position: relative;
    bottom: 0;
    left: 1rem;
    color: #1e1d1d;
    font-size: 2.2rem;
  }

  .linkedin-logo:hover,
  .github-logo:hover,
  .user-logo:hover {
    color: #898787;
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
      font-size: 1rem;
      font-weight: 700;
    }

    .linkedin-logo,
    .github-logo,
    .user-logo {
      position: relative;
      margin: 0;
      top: 3px;
      left: 40px;
      height: 100%;
      align-items: center;
      font-size: 1.6rem;
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

