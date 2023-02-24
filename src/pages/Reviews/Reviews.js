import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { onFetchReviews } from 'services/API';
import css from './Reviews.module.css';
import Spiner from 'components/Spiner/Spiner';
import PageNotFound from 'components/PageNotFound/PageNotFound';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    const fetchReviews = async () => {
      try {
        const data = await onFetchReviews(movieId);
        if (data === 0) {
          return;
        }
        setReviews(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);
  return (
    <>
      {isLoading && <Spiner wrapperStyle={{ fill: '#7b81ec' }} />}
      {error && <PageNotFound />}
      {reviews.length === 0 && <b>Sorry, there are no reviews yet.</b>}
      <ul className={css.reviewList}>
        {reviews.map(item => {
          return (
            <li key={item.id}>
              <b>Author: {item.author}</b>
              <p>{item.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Reviews;
