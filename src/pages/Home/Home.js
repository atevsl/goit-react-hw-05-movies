import { onFetch } from 'services/API';
import { useEffect, useState } from 'react';
import css from './Home.module.css';
import Spiner from 'components/Spiner/Spiner';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [films, setfilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await onFetch();
        if (data === 0) {
          return;
        }
        setfilms(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading && <Spiner wrapperStyle={{ fill: '#7b81ec' }} />}
      <h2 className={css.title}>Trending today:</h2>
      {films.length !== 0 && <MovieList moviesList={films} />}
      {error && <>error need reload</>}
    </>
  );
};
export default Home;
