import SearchForm from 'components/SearchForm/SearchForm';
import { Outlet, useSearchParams } from 'react-router-dom';
import { onFetchSearch } from 'services/API';
import { useEffect, useState } from 'react';
import Spiner from 'components/Spiner/Spiner';
import Notiflix from 'notiflix';
import css from './Movies.module.css';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search') ?? '';
  const onSubmitHendler = search => {
    if (search.trim() === '') {
      return Notiflix.Notify.failure('Please type search and try again.');
    }
    setSearchParams({ search });
  };

  useEffect(() => {
    setLoading(true);
    onFetchSearch(query).then(({ data }) => {
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
  }, [query]);

  return (
    <>
      <SearchForm onSubmitHendler={onSubmitHendler} />
      {loading && <Spiner wrapperStyle={{ fill: '#7b81ec' }} />}
      <ul className={css.list}>
        {searchMovies && <MovieList moviesList={searchMovies} />}
      </ul>
      <Outlet />
    </>
  );
};
export default Movies;
