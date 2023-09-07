import { FC } from 'react';
import { Pokemon } from '../../models/pokemon.model';
import PokeType from '../PokeType/PokeType';
import { DetailStyled, PokeCardDetailStyled } from './PokeCardDetailStyled';
import ButtonToHomePage from './buttonToHomePage/buttonToHomePage';

export interface Props {
  pokemon: Pokemon
};

const PokeCardDetail: FC<Props> = ({ pokemon }) => {

  const { name, id, imgUrl, type1, type2, size, stats } = pokemon;

  return (

    <DetailStyled>
      <PokeCardDetailStyled pokemon={pokemon}>
        <div className="pokemon-info">
          <h2 className='pokemon-name'>{name}</h2>
          <p className="pokemon-id" data-testid="idDetail">#{id.toString().padStart(4, '0')}</p>
        </div>
        <ButtonToHomePage />

        <div className="pokemon-details">
          <img className="pokemon-img" src={imgUrl} alt={name} />

          <div>
            <div className="types">
              <PokeType type={type1} />
              <PokeType type={type2} />
            </div>

            <p className='pokemon-stats'>
              Weight: <b>{size.weight}</b> kg
            </p>
            <p className='pokemon-stats'>
              Height: <b>{size.height}</b> cm
            </p>
            {stats.map((s) => (
              <p className='pokemon-stats' key={s.name + id}>
                {s.name} : <b>{s.value}</b>
              </p>
            ))}
          </div>
        </div>

      </PokeCardDetailStyled>
    </DetailStyled>
  );
};

export default PokeCardDetail;
