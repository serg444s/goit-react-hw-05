import { useParams, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { fetchMoviesById } from "../../movies-api";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import css from "./MovieDetailsPage.module.css";
import { Link } from "react-router-dom";

const MovieDetailsPage = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/movies");
  const previousHref = useRef(null);
  const backLink = backLinkHref.current;

  useEffect(() => {
    previousHref.current = backLink;
    const fetchMovie = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchMoviesById(params.movieId);
        setMovie(data);
      } catch (error) {
        setError(error);
        toast.error("Whoops, something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [params.movieId, backLink]);

  return (
    <div className={css.container}>
      {!loading && (
        <Link to={backLinkHref.current} className={css.link}>
          Go back
        </Link>
      )}
      <Toaster position="top-right" reverseOrder={false} />
      {loading && <Loader />}
      {movie && <MovieDetails movie={movie} />}
      {error && <ErrorMessage />}
      {!loading && (
        <div className={css.info}>
          <Link to="cast" className={css.link}>
            Cast
          </Link>
          <Link to="reviews" className={css.link}>
            Reviews
          </Link>
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
