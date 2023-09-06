import styled from 'styled-components';

const ErrorStyled = styled.article`

  text-align: center;
  max-width: 600px;
  margin: 0 auto;

  .error-img {
    padding: 1rem;
    width: 100%;
  }

  .error-text {
    font-size: 2rem;
    font-weight: 700;
  }

  @media (max-width: 430px) {

    .error-text {
    font-size: 1.4rem;
    font-weight: 700;
    }
  }
`;

const ErrorMsg = () => {
  return (

    <ErrorStyled>
      <img className="error-img" src="/pokemon-error.png" alt="Error" />
      <p className='error-text'>404 in the Pokedex. Try again later...</p>
    </ErrorStyled>
  );
};

export default ErrorMsg;
