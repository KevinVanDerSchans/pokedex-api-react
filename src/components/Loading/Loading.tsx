import styled from 'styled-components';

const LoadingStyled = styled.div`

  text-align: center;

  .loading-text {
    padding-top: 1rem;
    font-size: 1.4rem;
    font-weight: bold;
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
        <img className="loading-img" width={300} src="/assets/pokemon-loading.gif" alt="Loading" />
        <p className='loading-text'>Charmander is looking for the data...</p>
      </div>
    </LoadingStyled>
  );
};

export default Loading;
