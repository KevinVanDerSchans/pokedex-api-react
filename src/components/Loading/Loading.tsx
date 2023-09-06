import styled from 'styled-components';

const LoadingStyled = styled.div`

  text-align: center;
  height: 90vh;

  .loading-text {
    padding-top: 1rem;
    font-size: 1.8rem;
    font-weight: bold;
    color: #f0f0ec;
  }


  @media (max-width: 430px) {

    .loading-container {
      padding-top: 6rem;
    }

    .loading-text {
      padding-top: 1rem;
      font-size: 1.4rem;
      font-weight: bold;
    }
  }
`;

const Loading = () => {
  return (

    <LoadingStyled>
      <div className='loading-container'>
        <img className="loading-img" width={120} src="/assets/pokemon-loading.gif" alt="Loading" />
        <p className='loading-text'>Loading...</p>
      </div>
    </LoadingStyled>
  );
};

export default Loading;
