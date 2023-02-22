import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { onFetchReviews } from 'services/API';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    onFetchReviews(movieId).then(({ data }) => {
      setReviews(data.results);
    });
  }, [movieId]);
  return (
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
  );
};
export default Reviews;
