import { onFetch } from 'services/API';
import { useEffect, useState } from 'react';
import { Link, generatePath, useLocation } from 'react-router-dom';

import css from './Trend.module.css';
import Spiner from 'components/Spiner/Spiner';
const Trend = () => {
  const location = useLocation();
  const [films, setfilms] = useState(null);
  useEffect(() => {
    onFetch()
      .then(({ data }) => {
        if (data.results === 0) {
          console.log('нема відпоівіді');
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
          <ul>
            {films.map(film => {
              return (
                <li key={film.id}>
                  <Link
                    to={generatePath('/movies/:movieId', { movieId: film.id })}
                    state={{ from: location }}
                    className={css.listItem}
                  >
                    {film.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};
export default Trend;
