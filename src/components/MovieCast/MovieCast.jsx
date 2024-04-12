import { useEffect, useState } from "react";
import { fetchCredits } from "../../movies-api";
import toast, { Toaster } from "react-hot-toast";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import MovieCreditsList from "../MovieCreditsList/MovieCreditsList";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const [casts, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchMovie = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchCredits(movieId);
        setCast(data);
      } catch (error) {
        setError(error);
        toast.error("Whoops, something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  return (
    <div className={css.container}>
      <Toaster position="top-right" reverseOrder={false} />
      {error && <ErrorMessage />}
      <p className={css.title}>Movie Cast</p>
      {loading && <Loader />}
      {casts.length > 0 ? (
        <MovieCreditsList casts={casts} />
      ) : (
        <p>Sorry. There are no results...</p>
      )}
    </div>
  );
};

export default MovieCast;
