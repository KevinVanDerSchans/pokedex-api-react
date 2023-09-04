import styled from 'styled-components';

export const FooterStyled = styled.footer`

  display: flex;
  position: relative;
  height: 44px;
  justify-content: center;
  align-items: center;
  padding: 4px 0;
  color: rgb(192, 186, 186);
  background-color: rgb(80, 79, 79);
  z-index: 2;
  overflow-x: auto;

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
    bottom: 0;
    right: 0;
    color: rgb(232, 228, 228);
    font-size: 2.4rem;
    margin-right: 4px;
  }

  .linkedin-logo:hover,
  .github-logo:hover,
  .user-logo:hover {
    color: #e6b7b7;
  }
`;
