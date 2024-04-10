import css from "./MovieSearchForm.module.css";
import { IoSearch } from "react-icons/io5";
import toast from "react-hot-toast";

const MovieSearchForm = ({ onSearch }) => {
  const heandleSubmit = (evt) => {
    evt.preventDefault();
    if (evt.target.elements.query.value.trim() === "") {
      toast.error("Please enter search term!");
      onSearch("");
    }
    const form = evt.target;
    const result = form.elements.query.value.trim();
    onSearch(result);
    form.reset();
  };

  return (
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
  );
};

export default MovieSearchForm;
