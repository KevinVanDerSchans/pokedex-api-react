import styled from 'styled-components';

const ErrorStyled = styled.article`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  img {
    padding: 1rem;
    width: 100%;
  }
`;

const ErrorMsg = () => {
  return (
    <ErrorStyled>
      <img src="/pokemon-error.png" alt="Error" />
      <p>Error in the Pokedex. Try again later...</p>
    </ErrorStyled>
  );
};

export default ErrorMsg;
