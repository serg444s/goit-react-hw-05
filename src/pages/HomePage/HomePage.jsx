import { fetchTrendingMovies } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import { LoadMoreBtn } from "../../components/LoadMoreBtn/LoadMoreBtn";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchTrendingMovies(page);
        setMovies(data.results);
        setIsVisible(page < data.total_pages);
      } catch (error) {
        setError(error);
        toast.error("Whoops, something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      {error && <ErrorMessage />}
      <h2>TOP Movies</h2>
      {loading && <Loader />}
      <MovieList movies={movies} />
      {isVisible && !loading && <LoadMoreBtn onLoadMore={onLoadMore} />}
    </div>
  );
};

export default HomePage;
