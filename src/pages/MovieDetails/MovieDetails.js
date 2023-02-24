import { useEffect, useState } from 'react';
import { onFetchFilm } from 'services/API';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import css from './MovieDetails.module.css';
import noImg from '../../img/noImg.jpg';
import Spiner from 'components/Spiner/Spiner';
import PageNotFound from 'components/PageNotFound/PageNotFound';

const MovieDescription = () => {
  const [film, setFilm] = useState(null);
  const location = useLocation();
  const goBack = location.state?.from ?? '/';
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await onFetchFilm(movieId);
        if (data === 0) {
          return;
        }
        setFilm(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  const genresNames = film
    ? film.genres.map(genre => genre.name).join(', ')
    : '';

  return (
    <>
      {error && <PageNotFound />}

      <Link to={goBack} className={css.links}>
        Go back
      </Link>
      {isLoading && <Spiner wrapperStyle={{ fill: '#7b81ec' }} />}
      {film && (
        <div className={css.card}>
          {film.poster_path && (
            <img
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${film.poster_path}`}
              alt={film.title}
              width="400px"
            />
          )}
          {!film.poster_path && (
            <img src={noImg} alt={film.title} width="400px" />
          )}
          <div className={css.info}>
            <h2>
              {film.title} ( {film.release_date.slice(0, 4)} )
            </h2>
            <p>User score: {film.vote_average}</p>
            <h3>Overview</h3>
            <p>{film.overview}</p>
            <h4>Genres</h4>
            <p>{genresNames}</p>
            <Link to="cast" className={css.links} state={{ from: goBack }}>
              Cast
            </Link>
            <Link to="reviews" className={css.links} state={{ from: goBack }}>
              Reviews
            </Link>
          </div>
        </div>
      )}

      <Outlet />
    </>
  );
};
export default MovieDescription;
