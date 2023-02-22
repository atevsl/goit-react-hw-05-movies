import { onFetchSearch } from 'services/API';
import { generatePath, Link } from 'react-router-dom';
import css from './SearchForm.module.css';

const SearchForm = ({ searchMovies, search, setSearchMovies, setSearch }) => {
  const onInputHendler = e => {
    setSearch(e.currentTarget.value);
  };

  const onSubmitHendler = e => {
    e.preventDefault();
    if (search.trim() === '') {
      return console.log('there are no such movie');
      // Notiflix.Notify.failure('Please type search and try again.');
    }
    onFetchSearch(search).then(({ data }) => {
      setSearchMovies(data.results);
    });
  };
  return (
    <>
      <form onSubmit={onSubmitHendler}>
        <input
          type="text"
          name="search"
          onChange={onInputHendler}
          className={css.searchInput}
        />
        <button type="submit" className={css.searchBtn}>
          {' '}
          Search
        </button>
      </form>
      <ul>
        {searchMovies &&
          searchMovies.map(item => {
            return (
              <li key={item.id}>
                <Link
                  to={generatePath('/movies/:movieId/cast', {
                    movieId: item.id,
                  })}
                  className={css.listItem}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};
export default SearchForm;
