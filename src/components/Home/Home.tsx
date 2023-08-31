import './Home.css'

import ErrorMsg from '../ErrorMsg/ErrorMsg'
import Loading from '../Loading/Loading'
import PokeCardList from '../PokeCardList/PokeCardList'
import usePokemons from '../../hooks/usePokemons'

const Home = () => {
  const { loading, pokemons, page, maxPages, setPage, setLimit } = usePokemons();

  return (
    <>
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
    </>
  );
};

export default Home;
