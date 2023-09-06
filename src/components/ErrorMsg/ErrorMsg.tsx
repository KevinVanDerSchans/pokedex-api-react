import styled from 'styled-components';

const ErrorStyled = styled.article`

    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 90vh;

  .error-container {
    padding: 20px;
    text-align: center;
    border-radius: 10px;
  }

  .del {
    text-decoration: line-through;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 5px,
      black 3px,
      black 7px
    );
    padding: 2px 6px;
  }

  .error-img {
    width: 80%;
  }

  .error-text-container {
      margin-top: 0rem;
  }

  .error-text {
    font-size: 2rem;
    font-weight: 700;
    margin-top: 1rem;
  }

  @media (max-width: 430px) {

    .error-img {
      width: 100%;
    }

    .error-text-container {
      margin-top: 2.4rem;
    }

    .error-text {
      font-size: 1.4rem;
      font-weight: 700;
    }
  }
`;

const ErrorMsg = () => {
  return (

    <ErrorStyled>
      <div className='error-container'>
        <img width={120} className="error-img" src="/pokemon-error.png" alt="Error" />

        <div className='error-text-container'>
          <p className='error-text'>404 Pokemon not found...</p>
          <p className='error-text'>Did you spell the pokemon's name correctly?</p>
          <p className='error-text'>If you need it, contact <span className='del'>Bill</span> Kevin !</p>
        </div>
      </div>
    </ErrorStyled>
  );
};

export default ErrorMsg;
