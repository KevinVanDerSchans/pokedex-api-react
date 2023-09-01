import styled from 'styled-components';
import { Props } from './PokeCardDetail';

export const PokeCardDetailStyled = styled.article<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding: 20px;
  margin: 0 auto;
  max-width: 768px;
  text-transform: capitalize;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 5px 18px 0 rgba(8, 8, 12, 0.50);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  .pokemon-info {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 5px 15px;
    justify-content: space-between;
    background-color: #f3d6d2;
    border-radius: 20px;

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
    }

    .types {
      display: flex;
      width: 100%;
      justify-content: center;
      margin: 1rem 0;
    }
  }

  @media (max-width: 426px) {

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
