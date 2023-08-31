import styled from 'styled-components';

const LoadingStyled = styled.div`
  text-align: center;
  padding: 5rem 0;
  p {
    padding-top: 1rem;
    font-weight: bold;
  }
`;

const Loading = () => {
  return (
    <LoadingStyled>
      <img width={200} src="/pokemon-loading.gif" alt="Loading" />
      <p>Searching for data in the Pokedex...</p>
    </LoadingStyled>
  );
};

export default Loading;
