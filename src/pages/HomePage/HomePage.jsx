import { fetchTrendingMovies } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        setError(error);
        toast.error("Whoops, something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      {error && <ErrorMessage />}
      <h2>TOP Movies</h2>
      {loading && <Loader />}
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
