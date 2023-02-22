import Nav from 'components/Nav/Nav';
import { useEffect, useState } from 'react';
import { onFetchFilm, onFetchGenresList } from 'services/API';
import { Outlet, useParams, Link, generatePath } from 'react-router-dom';

const MovieDescription = () => {
  const [film, setFilm] = useState({});
  const [genresList, setGenresList] = useState([]);
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
      <img
        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${film.poster_path}`}
        alt="movie poster"
      ></img>

      <h2>
        {film.title} ( {film.release_date} )
      </h2>
      <p>User score: {film.vote_average}</p>
      <p>Overview</p>
      <p>{film.overview}</p>
      <p>Genres</p>
      <p>////</p>

      <Link to={generatePath('/movies/:movieId/cast', { movieId })}>Cast</Link>
      <Link to={generatePath('/movies/:movieId/reviews', { movieId })}>
        Reviews
      </Link>

      <Outlet />
    </>
  );
};
export default MovieDescription;
