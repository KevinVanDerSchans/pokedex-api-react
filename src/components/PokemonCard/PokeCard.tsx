import { FC } from 'react';
import { Pokemon } from '../../models/pokemon.model';
import PokeType from '../PokeType/PokeType'
import { CardStyled } from './PokeCardStyled';
import { Link } from 'react-router-dom';

export interface Props {
  pokemon: Pokemon;
};

const PokeCard: FC<Props> = ({ pokemon }) => {
  const { name, id, imgUrl, type1, type2 } = pokemon;

  return (
    <CardStyled pokemon={pokemon} className='pokemon-card'>
      <div className="pokemon-info">
        <h2 className='pokemon-name'>{name}</h2>
        <p className="pokemon-id" data-testid="id">#{id.toString().padStart(4, '0')}</p>
      </div>

      <Link to={`/${id}`}>
        <img className="pokemon-img" src={imgUrl} alt={name} />
      </Link>

      <div className="types">
        <PokeType type={type1} />
        <PokeType type={type2} />
      </div>
    </CardStyled>
  );
};

export default PokeCard;
