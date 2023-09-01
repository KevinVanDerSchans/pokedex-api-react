import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';
import Loading from '../../components/Loading/Loading';
import Pagination from '../../components/Pagination/Pagination';
import PokeCardList from '../../components/PokeCardList/PokeCardList';
import usePokemons from '../../hooks/usePokemons';
import Header from '../../components/Header/Header';
import styled from 'styled-components';

const HomePageStyled = styled.section`
  margin: 0 auto;
`;

const HomePage = () => {
  const { loading, pokemons, page, maxPages, setPage, setLimit } =
    usePokemons();

  return (
    <>
      <HomePageStyled>
        <Header />
        <Pagination
          setLimit={setLimit}
          setPage={setPage}
          page={page}
          maxPages={maxPages}
        />
        {loading ? (
          <Loading />
        ) : (
          (pokemons && <PokeCardList pokemons={pokemons} />) || <ErrorMsg />
        )}
      </HomePageStyled>
    </>
  );
};

export default HomePage;
