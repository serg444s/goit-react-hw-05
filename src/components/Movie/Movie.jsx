import css from "./Movie.module.css";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const baseURL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <img
          src={
            movie.backdrop_path
              ? `${baseURL}/${movie.backdrop_path}`
              : "https://kartinki.pics/pics/uploads/posts/2022-08/1659664031_1-kartinkin-net-p-kino-abstraktsiya-krasivo-1.jpg"
          }
          className={css.img}
        />
      </div>
      <Link to={`/movies/${movie.id}`} className={css.link}>
        <h3 className={css.title}>{movie.title}</h3>
      </Link>
    </div>
  );
};
export default Movie;
