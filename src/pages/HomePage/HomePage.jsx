import { fetchTrendingMovies } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import { LoadMoreBtn } from "../../components/LoadMoreBtn/LoadMoreBtn";
import SelectTime from "../../components/SelectTime/SelectTime";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [time, setTime] = useState("day");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchTrendingMovies(time, page);
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
  }, [time, page]);

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleChangeTime = (value) => {
    setMovies([]);
    setPage(1);
    setTime(value);
    console.log(value);
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      {error && <ErrorMessage />}
      <h2>
        TOP Movies from: <SelectTime handleChangeTime={handleChangeTime} />
      </h2>
      {loading && <Loader />}
      <MovieList movies={movies} />
      {isVisible && !loading && <LoadMoreBtn onLoadMore={onLoadMore} />}
    </div>
  );
};

export default HomePage;
