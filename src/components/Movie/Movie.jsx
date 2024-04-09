import css from "./Movie.module.css";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const baseURL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <img src={`${baseURL}/${movie.backdrop_path}`} className={css.img} />
      </div>
      <Link to={`/movies/${movie.id}`}>
        <h3 className={css.title}>{movie.title}</h3>
      </Link>
    </div>
  );
};
export default Movie;
