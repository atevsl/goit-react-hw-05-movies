import Nav from 'components/Nav/Nav';
import { useEffect, useState } from 'react';
import { onFetchFilm, onFetchGenresList } from 'services/API';
import { Outlet, useParams, Link, generatePath } from 'react-router-dom';
import css from './MovieDetails.module.css';

const MovieDescription = () => {
  const [film, setFilm] = useState(null);
  const [genresList, setGenresList] = useState(null);
  // const [genres, setGenres] = useState('');

  const { movieId } = useParams();
  useEffect(() => {
    onFetchGenresList().then(({ data }) => {
      return setGenresList(data);
    });

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

    // genresList.forEach(({ name, id }) => {
    //   if (film.genre_ids.includes(id)) {
    //     console.log('includes such genre');
    //     // setGenres(name);
    //     // if (genre_ids.length > 2) {
    //     //   genre_ids.splice(2, genre_ids.length - 1, 'Other');
    //     // }
    //     film.genre_ids.splice(film.genre_ids.indexOf(id), 1, name);
    //   }
    //   setGenres(film.genre_ids.join(', '));
    // });
  }, [movieId]);

  if (!film || !genresList) return;

  return (
    <>
      <Nav />
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
            <p>GenresList</p>
          </div>
        </div>
      )}

      <Link
        to={generatePath('/movies/:movieId/cast', { movieId })}
        className={css.links}
      >
        Cast
      </Link>
      <Link
        to={generatePath('/movies/:movieId/reviews', { movieId })}
        className={css.links}
      >
        Reviews
      </Link>

      <Outlet />
    </>
  );
};
export default MovieDescription;
