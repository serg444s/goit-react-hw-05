const MovieCreditItem = ({ cast }) => {
  console.log(cast);
  const baseURL = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <div>
        <img src={`${baseURL}/${cast.profile_path}`} />
      </div>
      <h3>{cast.name}</h3>
    </div>
  );
};
export default MovieCreditItem;
