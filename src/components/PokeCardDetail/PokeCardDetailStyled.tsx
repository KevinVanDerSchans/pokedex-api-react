import styled from 'styled-components';
import { Props } from './PokeCardDetail';

export const PokeCardDetailStyled = styled.article<Props>`

  display: flex;
  position: fixed;
  width: 700px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding: 20px;
  margin: 0 auto;
  max-width: 768px;
  text-transform: capitalize;
  background: rgba(255, 255, 255, 0.35);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  -webkit-box-shadow: 3px 6px 13px -1px rgba(11, 11, 11, 0.84);
  box-shadow: 3px 6px 13px -1px rgba(7, 7, 7, 0.84);

  .pokemon-info {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 5px 15px;
    justify-content: space-between;
    background-color: #e4a59f;
    border-radius: 10px;

    .pokemon-name {
      font-size: 2.4rem;
      max-width: 150px;
      margin-left: 0.4rem;
    }

    .pokemon-id {
      font-size: 1.8rem;
      margin-right: 0.4rem;
      visibility: ${(props) =>
        props.pokemon.id < 10000 ? `visible` : 'hidden'};
    }
  }

  .pokemon-details {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
    font-size: 1.4rem;

    .pokemon-img {
      width: 300px;
      pointer-events: none;
    }

    .types {
      display: flex;
      width: 100%;
      justify-content: center;
      margin: 1rem 0;
    }
  }


  @media (max-width: 715px) {

    width: 340px;

    .pokemon-info .pokemon-name {
      font-size: 2rem;
      max-width: 150px;
      margin-left: 0.4rem;
    }

    .pokemon-info .pokemon-id {
      font-size: 1.4rem;
    }

    .pokemon-details {
      flex-direction: column;

      .pokemon-img {
        width: 200px;
      }
    }
  }
`;

export const DetailStyled = styled.section`
  max-width: 1440px;
`;
