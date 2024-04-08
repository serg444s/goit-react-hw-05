import css from "./MoviesPage.module.css";
import { IoSearch } from "react-icons/io5";
import { fetchMoviesByQuery } from "../../movies-api";
import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [state, setState] = useState([]);

  const heandleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const result = form.elements.name.value;
    console.log(result);

    const fetch = async () => {
      try {
        const data = await fetchMoviesByQuery(result);
        console.log(data.results);
        setState(data.results);
      } catch (error) {
        console.log(error);
        alert("error");
      }
    };
    fetch();

    form.reset();
  };

  console.log(state);

  return (
    <div className={css.container}>
      <p className={css.text}>Please enter movie title...</p>
      <form onSubmit={heandleSubmit} className={css.form}>
        <input
          type="text"
          required
          placeholder="Search movie..."
          autoFocus
          name="name"
          className={css.input}
        />
        <button type="submit" className={css.btn} title="Search">
          <IoSearch />
        </button>
      </form>
      {/* <MovieList movie={state} /> */}
    </div>
  );
};

export default MoviesPage;
