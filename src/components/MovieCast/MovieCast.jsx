import { useEffect, useState } from "react";
import { fetchCredits } from "../../movies-api";
import toast, { Toaster } from "react-hot-toast";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import MovieCreditsList from "../MovieCreditsList/MovieCreditsList";

const MovieCast = () => {
  const [casts, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
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
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      {error && <ErrorMessage />}
      <p>Movie Cast</p>
      {loading && <Loader />}
      <MovieCreditsList casts={casts} />
    </div>
  );
};

export default MovieCast;
