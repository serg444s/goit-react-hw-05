import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const heandleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const result = form.elements.name.value;
    console.log(result);
    form.reset();
  };

  return (
    <div>
      <form onSubmit={heandleSubmit} className={css.form}>
        <input
          type="text"
          required
          placeholder="Search movie..."
          autoFocus
          name="name"
          className={css.input}
        />
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>
    </div>
  );
};

export default MoviesPage;
