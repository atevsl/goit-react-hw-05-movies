import SearchForm from 'components/SearchForm/SearchForm';
import { Outlet, useSearchParams } from 'react-router-dom';
import { onFetchSearch } from 'services/API';
import { useState } from 'react';
import Spiner from 'components/Spiner/Spiner';
import Notiflix from 'notiflix';
import { generatePath, Link, useLocation } from 'react-router-dom';
import css from './Movies.module.css';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [searchMovies, setSearchMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const onInputHendler = e => {
    setSearch(e.currentTarget.value);
  };

  const onSubmitHendler = e => {
    e.preventDefault();
    setLoading(true);
    if (search.trim() === '') {
      setSearchMovies([]);
      setLoading(false);

      return Notiflix.Notify.failure('Please type search and try again.');
    }
    onFetchSearch(search).then(({ data }) => {
      if (data.total_results === 0) {
        setSearchMovies([]);
        setLoading(false);
        return Notiflix.Notify.failure(
          'Sorry, we cant find such movie. Please type search and try again.'
        );
      }
      setSearchMovies(data.results);
      setLoading(false);
    });
    console.log('location' + location.pathname);
    setSearch('');
  };
  return (
    <>
      <SearchForm
        onInputHendler={onInputHendler}
        onSubmitHendler={onSubmitHendler}
        search={query}
      />
      {loading && <Spiner wrapperStyle={{ fill: '#7b81ec' }} />}
      <ul>
        {searchMovies &&
          searchMovies.map(item => {
            return (
              <li key={item.id}>
                <Link
                  to={generatePath('/movies/:movieId/cast', {
                    movieId: item.id,
                  })}
                  state={{ from: location }}
                  className={css.listItem}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
      </ul>
      <Outlet />
    </>
  );
};
export default Movies;
