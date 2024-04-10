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
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQke7ku-tpPqDSrW_OpRnv-2kxc2H7Obf_lih6_ZKBkoQ&s"
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
