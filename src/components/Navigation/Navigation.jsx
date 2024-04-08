import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={buildLinkClass}>
        Home Page
      </NavLink>
      <NavLink to="/movies" className={buildLinkClass}>
        Movies Page
      </NavLink>
    </nav>
  );
};

export default Navigation;
