import { fetchTrendingMovies } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";
import { useState } from "react";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const fetch = async () => {
    try {
      const data = await fetchTrendingMovies();
      console.log(data.results);
      setMovies(data.results);
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };
  fetch();

  return (
    <div>
      <h2>TOP Movies</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
