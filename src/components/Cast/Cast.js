import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { onFetchCast } from 'services/API';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    onFetchCast(movieId).then(({ data }) => {
      setCast(data.cast);
    });
  }, [movieId]);

  return (
    <>
      {cast.length === 0 && <div>Sorry we couldn't find the cast</div>}
      <ul className={css.castList}>
        {cast.map(item => {
          return (
            <li key={item.id} className={css.castItem}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.profile_path}`
                    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'
                }
                alt="cast"
                width="200px"
                height="300px"
              ></img>
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
