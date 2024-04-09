import css from "./MovieDetails.module.css";
const MovieDetails = ({ movie }) => {
  const baseURL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <img src={`${baseURL}/${movie.backdrop_path}`} className={css.img} />
      </div>
      <h3 className={css.title}>{movie.title}</h3>
      <p>{movie.overview}</p>
      <p>Release date: {movie.release_date}</p>
      <p>Runtime: {movie.runtime}min.</p>
      <p>Rating: {movie.vote_average}</p>
      <div>
        <p>Genres:</p>
        <ul>
          {movie.genres.map((genre) => (
            <li key={genre.id}>
              <p>{genre.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default MovieDetails;
