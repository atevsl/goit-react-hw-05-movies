import { onFetch } from 'services/API';
import { useEffect, useState } from 'react';
import { Link, generatePath } from 'react-router-dom';
import css from './Trend.module.css';
const Trend = () => {
  const [films, setfilms] = useState([]);
  useEffect(() => {
    onFetch()
      .then(({ data }) => {
        if (data.results === 0) {
          console.log('нема відпоівіді');
          return;
        }
        console.log('set top films');

        setfilms(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h2 className={css.title}>Trending today:</h2>
      <ul>
        {films.map(film => {
          return (
            <li key={film.id}>
              <Link
                to={generatePath('/movies/:movieId', { movieId: film.id })}
                className={css.listItem}
              >
                {film.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Trend;
