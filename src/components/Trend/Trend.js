import { onFetch } from 'services/API';
import { useEffect, useState } from 'react';
import { Link, generatePath, useLocation } from 'react-router-dom';

import css from './Trend.module.css';
import Spiner from 'components/Spiner/Spiner';
import MovieCard from 'components/MovieCard/MovieCard';
const Trend = () => {
  const location = useLocation();
  const [films, setfilms] = useState(null);
  useEffect(() => {
    onFetch()
      .then(({ data }) => {
        if (data.results === 0) {
          return;
        }

        setfilms(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {!films && <Spiner wrapperStyle={{ fill: '#7b81ec' }} />}
      {films && (
        <>
          <h2 className={css.title}>Trending today:</h2>
          <ul className={css.list}>
            {films && <MovieCard moviesList={films} location={location} />}
            {/* {films.map(film => {
              return (
                <li key={film.id} className={css.listItem}>
                  <Link
                    to={generatePath('/movies/:movieId', { movieId: film.id })}
                    state={{ from: location }}
                    className={css.listLink}
                  >
                    <img
                      src={
                        film.poster_path
                          ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${film.poster_path}`
                          : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'
                      }
                      alt="movie poster"
                      width="200px"
                    ></img>
                    <p>{film.title}</p>
                  </Link>
                </li>
              );
            })} */}
          </ul>
        </>
      )}
    </>
  );
};
export default Trend;
