import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <Link to="/">HomePage</Link>
      <h2>Page not found</h2>
      <p>Sorry, the requested page does not exist.</p>
      <img src="../../../img/404.png" />
    </div>
  );
};

export default NotFoundPage;
