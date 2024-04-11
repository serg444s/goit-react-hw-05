import css from "./MovieList.module.css";

const MovieReviewsList = ({ reviews }) => {
  return (
    <ul className={css.list}>
      {reviews.map((review) => {
        return (
          <li key={review.id} className={css.item}>
            <p>{review.author}</p>
            <p>Rating: {review.author_details.rating}</p>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieReviewsList;
