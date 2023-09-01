import { Link } from "react-router-dom"
import styled from "styled-components"

const ButtonToHomePageStyled = styled.div`

  .button-to-home-page {
    font-family: 'Pocket Monk';
    background-color: #424141;
    color: #f4f1f1;
    font-size: 1.8rem;
    padding: 12px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }

  .button-to-home-page:hover {
    color: #151515;
    background-color: #98989a;
  }
`

const ButtonToHomePage = () => {
  return (
    <ButtonToHomePageStyled>
    <Link to={'/'}>
      <button className="button-to-home-page">
        Back to HOME
      </button>
    </Link>
    </ButtonToHomePageStyled>
  )
}

export default ButtonToHomePage;
