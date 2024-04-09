import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMoviesById } from "../../movies-api";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieDetails from "../../components/MovieDetails/MovieDetails";

const MovieDetailsPage = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchMoviesById(params.movieId);
        setMovie(data);
        console.log(data);
      } catch (error) {
        setError(error);
        toast.error("Whoops, something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [params.movieId]);

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      {loading && <Loader />}
      {movie && <MovieDetails movie={movie} />}
      {error && <ErrorMessage />}
    </div>
  );
};

export default MovieDetailsPage;
