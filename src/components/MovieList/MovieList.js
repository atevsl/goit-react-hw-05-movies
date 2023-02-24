import css from './MovieList.module.css';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import noImg from '../../img/noImg.jpg';

const MovieList = ({ moviesList }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {moviesList.map(movie => {
        return (
          <li key={movie.id} className={css.listItem}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className={css.listLink}
            >
              {movie.poster_path && (
                <img
                  src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
                  alt={movie.title}
                  width="200px"
                />
              )}
              {!movie.poster_path && (
                <img src={noImg} alt={movie.title} width="200px" />
              )}
              <p>{movie.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default MovieList;

MovieList.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
