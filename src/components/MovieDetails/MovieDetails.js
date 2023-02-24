import { useEffect, useState } from 'react';
import { onFetchFilm } from 'services/API';
import {
  Outlet,
  useParams,
  Link,
  generatePath,
  useLocation,
} from 'react-router-dom';
import css from './MovieDetails.module.css';

const MovieDescription = () => {
  const [film, setFilm] = useState(null);
  const location = useLocation();

  const { movieId } = useParams();

  useEffect(() => {
    onFetchFilm(movieId)
      .then(({ data }) => {
        if (data.results === 0) {
          console.log('нема відпоівіді');
          return;
        }
        return setFilm(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);
  const genresNames = film
    ? film.genres.map(genre => genre.name).join(', ')
    : '';
  return (
    <>
      <Link
        to={location.state ? location.state.from : '/'}
        className={css.links}
      >
        Go back
      </Link>
      {film && (
        <div className={css.card}>
          <img
            src={
              film.poster_path
                ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${film.poster_path}`
                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'
            }
            alt="movie poster"
            width="300px"
          ></img>
          <div className={css.info}>
            <h2>
              {film.title} ( {film.release_date.slice(0, 4)} )
            </h2>
            <p>User score: {film.vote_average}</p>
            <h3>Overview</h3>
            <p>{film.overview}</p>
            <h4>Genres</h4>
            <p>{genresNames}</p>
            <Link
              to={generatePath('/movies/:movieId/cast', { movieId })}
              className={css.links}
              replace={true}
            >
              Cast
            </Link>
            <Link
              to={generatePath('/movies/:movieId/reviews', { movieId })}
              className={css.links}
              replace={true}
            >
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
