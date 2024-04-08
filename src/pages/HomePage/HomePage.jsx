import { fetchTrendingMovies } from "../../movies-api";

const HomePage = () => {
  const fetch = async () => {
    try {
      const data = await fetchTrendingMovies();
      console.log(data);
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };
  fetch();

  return (
    <div>
      <p>HomePage</p>
    </div>
  );
};

export default HomePage;
