import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h2>Page not found</h2>
      <p>Sorry, the requested page does not exist.</p>
      <Link to="/">HomePage</Link>
    </div>
  );
};

export default NotFoundPage;
