import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { onFetchCast } from 'services/API';
import css from './Cast.module.css';
import noImg from '../../img/noImg.jpg';
import Spiner from 'components/Spiner/Spiner';
import PageNotFound from 'components/PageNotFound/PageNotFound';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    const fetchCast = async () => {
      try {
        const data = await onFetchCast(movieId);
        if (data === 0) {
          return;
        }
        setCast(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {isLoading && <Spiner wrapperStyle={{ fill: '#7b81ec' }} />}
      {error && <PageNotFound />}
      {cast.length === 0 && <b>Sorry we couldn't find the cast</b>}
      <ul className={css.castList}>
        {cast.map(item => {
          return (
            <li key={item.cast_id} className={css.castItem}>
              {item.profile_path && (
                <img
                  src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.profile_path}`}
                  alt={item.name}
                  width="200px"
                />
              )}
              {!item.profile_path && (
                <img src={noImg} alt={item.name} width="200px" />
              )}
              <p>
                <b>{item.name}</b>
              </p>
              <p>Character: {item.character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Cast;
