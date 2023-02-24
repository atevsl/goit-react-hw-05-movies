import SearchForm from 'components/SearchForm/SearchForm';
import { Outlet, useSearchParams } from 'react-router-dom';
import { onFetchSearch } from 'services/API';
import { useEffect, useState } from 'react';
import Spiner from 'components/Spiner/Spiner';
import Notiflix from 'notiflix';
import { useLocation } from 'react-router-dom';
import css from './Movies.module.css';
import MovieCard from 'components/MovieCard/MovieCard';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const onSubmitHendler = search => {
    console.log('onSubmitHendler: ' + search);
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
  };
  // useEffect(() => {
  //   onSubmitHendler(query);
  // }, [query]);
  return (
    <>
      <SearchForm onSubmitHendler={onSubmitHendler} />
      {loading && <Spiner wrapperStyle={{ fill: '#7b81ec' }} />}
      <ul className={css.list}>
        {searchMovies && (
          <MovieCard moviesList={searchMovies} location={location} />
        )}
      </ul>
      <Outlet />
    </>
  );
};
export default Movies;
