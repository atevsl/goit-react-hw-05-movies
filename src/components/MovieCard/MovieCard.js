import css from './MovieCard.module.css';
import { generatePath, Link } from 'react-router-dom';

const MovieCard = ({ moviesList, location }) => {
  return moviesList.map(movie => {
    return (
      <li key={movie.id} className={css.listItem}>
        <Link
          to={generatePath('/movies/:movieId', {
            movieId: movie.id,
          })}
          state={{ from: location }}
          className={css.listLink}
        >
          <img
            src={
              movie.poster_path
                ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`
                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'
            }
            alt="movie poster"
            width="200px"
          ></img>
          <p>{movie.title}</p>
        </Link>
      </li>
    );
  });
};
export default MovieCard;
