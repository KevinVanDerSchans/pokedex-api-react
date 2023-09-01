import styled from 'styled-components';
import { Props } from './PokeCard';

export const CardStyled = styled.article<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding: 8px;
  width: 250px;
  height: 300px;
  background-color: rgba(235, 235, 235, 0.35);
  box-shadow: 0 5px 18px 0 rgba(8, 8, 12, 0.50);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 0.18);

    &:hover {
      background-color: rgba(140, 136, 136, 0.35);
    }

  .pokemon-info {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 10px 15px;
    justify-content: space-between;
    background-color: #f3d6d2;
    border-radius: 20px;

    .pokemon-name {
      font-size: 1.4rem;
      font-style: italic;
      text-transform: capitalize;
      max-width: 150px;
    }

    .pokemon-id {
      font-size: 1.2rem;
      visibility: ${(props) =>
        props.pokemon.id < 10000 ? `visible` : 'hidden'};
    }
  }

  .pokemon-img {
    min-width: 100px;
    max-height: 150px;
  }

  .types {
    display: flex;
    align-items: center;
  }

  @media (max-width: 769px) {
    width: 170px;
    height: 250px;

    .pokemon-img {
      min-width: 80px;
      max-height: 100px;
    }

    .pokemon-info {

      .pokemon-name {
        font-size: small;
      }

      .pokemon-id {
        font-size: smaller;
      }
    }
  }
`;
