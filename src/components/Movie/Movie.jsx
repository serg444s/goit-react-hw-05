import css from "./Movie.module.css";

const Movie = ({ movie }) => {
  const baseURL = "https://image.tmdb.org/t/p/w500";
  console.log(movie);
  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <img src={`${baseURL}/${movie.backdrop_path}`} className={css.img} />
      </div>
      <h3 className={css.title}>{movie.title}</h3>
    </div>
  );
};
export default Movie;
