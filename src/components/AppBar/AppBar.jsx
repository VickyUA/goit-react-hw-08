import { NavLink } from "react-router-dom";
import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <nav className={css.wrapper}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/registration">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
}
