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
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search') ?? '';

  const onSubmitHendler = search => {
    if (search.trim() === '') {
      return Notiflix.Notify.failure('Please type search and try again.');
    }
    setSearchParams({ search });
  };

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await onFetchSearch(query);
        setSearchMovies(data);
      } catch (error) {
        Notiflix.Notify.failure(
          'Sorry, we did not find this movie. Please repeat the search'
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query]);

  return (
    <>
      <SearchForm onSubmitHendler={onSubmitHendler} />
      {isLoading && <Spiner wrapperStyle={{ fill: '#7b81ec' }} />}

      {searchMovies && <MovieList moviesList={searchMovies} />}

      <Outlet />
    </>
  );
};
export default Movies;
