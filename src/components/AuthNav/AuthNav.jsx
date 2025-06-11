import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function Navigation() {
  return (
    <nav className={css.wrapper}>
      <NavLink to="/registration">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
}
