import { useNavigate } from 'react-router-dom';
import { pokeType } from '../../models/pokemon.model';
import { SearchBarStyled } from './SearchBarStyled';

const SearchBar = () => {

  const audioUrlFilter = '/polytones/level-up.mp3';

  const audioUrlSearch = '/polytones/recovery.mp3';

  const playAudioFilter = () => {
    const audio = new Audio(audioUrlFilter);
    audio.play();
  };

  const playAudioSearch = () => {
    const audio = new Audio(audioUrlSearch);
    audio.play();
  };

  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ref = e.currentTarget.elements.namedItem('id') as HTMLInputElement;
    navigate(`/${ref.value.toLowerCase()}`);
    ref.value = '';
  };

  const handleType = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ref = e.currentTarget.elements.namedItem('type') as HTMLInputElement;
    navigate(`/filter/${ref.value.toLowerCase()}`);
  };

  return (
    <SearchBarStyled>
      <div className='searchers-container'>

        <form
          onSubmit={handleType}
          className='filter-form'
        >
          <label>
            <div className='form-input-container'>
              <select name="type">

                {Object.keys(pokeType).map(
                  (type) =>
                    type !== 'undefined' && <option key={type}>{type}</option>
                )}
              </select>

              <button
                type="submit"
                data-testid="searchByType"
                className='input-button-filter'
                onClick={playAudioFilter}
                >
                FILTER
              </button>
            </div>
          </label>
        </form>

        <form onSubmit={handleSearch}>
          <label>
            <div className="form-input-container">
              <input
                type="text"
                className="search-text-placeholder"
                placeholder="Type here your Pokemon..."
                name="id"
                autoComplete='off'
              />
              <button
                type="submit"
                data-testid="searchById"
                className='input-button-search'
                onClick={playAudioSearch}
              >
                  SEARCH
              </button>
            </div>
          </label>
        </form>
      </div>
    </SearchBarStyled>
  );
};

export default SearchBar;
