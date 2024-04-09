import css from "./MoviesPage.module.css";
import { IoSearch } from "react-icons/io5";
import { fetchMoviesByQuery } from "../../movies-api";
import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import toast, { Toaster } from "react-hot-toast";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const heandleSubmit = (evt) => {
    evt.preventDefault();
    if (evt.target.elements.query.value.trim() === "") {
      toast.error("Please enter search term!");
      setQuery("");
    }
    const form = evt.target;
    const result = form.elements.query.value.trim();
    setQuery(result);
    form.reset();
  };

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

  return (
    <div className={css.container}>
      <p className={css.text}>Please enter movie title...</p>
      <form onSubmit={heandleSubmit} className={css.form}>
        <input
          type="text"
          required
          placeholder="Search movie..."
          autoFocus
          name="query"
          className={css.input}
        />
        <button type="submit" className={css.btn} title="Search">
          <IoSearch />
        </button>
      </form>
      {loading && <Loader />}
      <Toaster position="top-right" reverseOrder={false} />
      {error && <ErrorMessage />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
