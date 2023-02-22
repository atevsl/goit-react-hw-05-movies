import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { onFetchCast } from 'services/API';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    onFetchCast(movieId).then(({ data }) => {
      setCast(data.cast);
      console.log(data.cast);
    });
  }, []);

  return (
    <ul>
      {cast.map(item => {
        return (
          <li key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.profile_path}`}
              alt="cast photo"
            ></img>
            <p>{item.name}</p>
            <p>Character: {item.character}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default Cast;
