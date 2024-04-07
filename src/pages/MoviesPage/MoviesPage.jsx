const MoviesPage = () => {
  const heandleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const result = form.elements.name.value;
    console.log(result);
    form.reset();
  };

  return (
    <form onSubmit={heandleSubmit}>
      <input
        type="text"
        required
        placeholder="Search movie..."
        autoFocus
        name="name"
      />
      <button>Search</button>
    </form>
  );
};

export default MoviesPage;
