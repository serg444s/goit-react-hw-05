import css from "./MoviesPage.module.css";
import { fetchMoviesByQuery } from "../../movies-api";
import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import toast, { Toaster } from "react-hot-toast";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import MovieSearchForm from "../../components/MovieSearchForm/MovieSearchForm";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchMoviesByQuery(query);
        setMovies(data.results);
      } catch (error) {
        setError(error);
        toast.error("Whoops, something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  const onSearch = (value) => {
    setQuery(value);
  };

  return (
    <div className={css.container}>
      <p className={css.text}>Please enter movie title...</p>
      <MovieSearchForm onSearch={onSearch} />
      {loading && <Loader />}
      <Toaster position="top-right" reverseOrder={false} />
      {error && <ErrorMessage />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
