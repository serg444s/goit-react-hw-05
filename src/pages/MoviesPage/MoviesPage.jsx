import css from "./MoviesPage.module.css";
import { fetchMoviesByQuery } from "../../movies-api";
import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import toast, { Toaster } from "react-hot-toast";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import MovieSearchForm from "../../components/MovieSearchForm/MovieSearchForm";
import { useSearchParams } from "react-router-dom";
import { LoadMoreBtn } from "../../components/LoadMoreBtn/LoadMoreBtn";

const MoviesPage = () => {
  // const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!searchQuery) return;
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchMoviesByQuery(searchQuery, page);
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
        setIsVisible(page < data.total_pages);
      } catch (error) {
        setError(error);
        toast.error("Whoops, something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchQuery, page]);

  const onSearch = (value) => {
    setMovies([]);
    // setQuery(value);
    setIsEmpty(true);
    setSearchParams({ query: value });
    setPage(1);
  };

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={css.container}>
      <p className={css.text}>Please enter movie title...</p>
      <MovieSearchForm onSearch={onSearch} />
      {loading && <Loader />}
      <Toaster position="top-right" reverseOrder={false} />
      {error && <ErrorMessage />}
      {movies.length > 0 && <MovieList movies={movies} />}
      {isVisible && !loading && <LoadMoreBtn onLoadMore={onLoadMore} />}
      {isEmpty && movies.length < 1 && !loading && (
        <p>Sorry. There are no results...</p>
      )}
    </div>
  );
};

export default MoviesPage;
