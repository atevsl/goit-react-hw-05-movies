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
  // const query = searchParams.get('query');

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
      setSearchParams({ query: search });
      setSearchMovies(data.results);
      setLoading(false);
    });
    setSearch('');
  };
  return (
    <>
      <SearchForm
        onInputHendler={onInputHendler}
        onSubmitHendler={onSubmitHendler}
        search={search}
      />
      {loading && <Spiner wrapperStyle={{ fill: '#7b81ec' }} />}
      <ul className={css.list}>
        {searchMovies &&
          searchMovies.map(item => {
            return (
              <li key={item.id} className={css.listItem}>
                <Link
                  to={generatePath('/movies/:movieId', {
                    movieId: item.id,
                  })}
                  state={{ from: location }}
                  className={css.listLink}
                >
                  {' '}
                  <img
                    src={
                      item.poster_path
                        ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`
                        : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'
                    }
                    alt="movie poster"
                    width="200px"
                  ></img>
                  <p>{item.title}</p>
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
