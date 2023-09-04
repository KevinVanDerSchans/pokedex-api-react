import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';
import Loading from '../../components/Loading/Loading';
import Pagination from '../../components/Pagination/Pagination';
import PokeCardList from '../../components/PokeCardList/PokeCardList';
import usePokemons from '../../hooks/usePokemons';
import Header from '../../components/Header/Header';
import styled from 'styled-components';
import Footer from '../../components/Footer/Footer';
import { Player } from "../../components/Player/Player";

const HomePageStyled = styled.section`
  margin: 0 auto;
  overflow-y: hidden;

  .danceButtonContainer {
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: left;
    padding-left: 1.6rem;
  }

  .danceBtn {
    border-radius: 20px;
    padding: 18px;
    margin: 15px 0 0 15px;
    font-size: 1.4rem;
    font-family: inherit;
    cursor: pointer;
    background-color: #ba3535;
    color: white;
    border: none;
    animation: dance 5s infinite;
  }

  @keyframes dance {
    0%, 100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px) rotate(-5deg);
    }
    50% {
      transform: translateX(5px) rotate(5deg);
    }
    75% {
      transform: translateX(-5px) rotate(-5deg);
    }
  }

  .danceBtn:hover {
    background-color: #383636;
  }
`;

const HomePage = () => {
  const { loading, pokemons, page, maxPages, setPage, setLimit } = usePokemons();

  return (
    <>
      <HomePageStyled>
        <Header/>

        <Player />

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
        <Footer />
      </HomePageStyled>
    </>
  );
};

export default HomePage;
