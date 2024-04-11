import MovieCreditItem from "../MovieCreditItem/MovieCreditItem";

const MovieCreditsList = ({ casts }) => {
  console.log(casts);
  return (
    <ul>
      {casts.map((cast) => {
        return (
          <li key={cast.id}>
            <MovieCreditItem cast={cast} />
          </li>
        );
      })}
    </ul>
  );
};

export default MovieCreditsList;
