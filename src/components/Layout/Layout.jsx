import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <AppBar />
      <div className={css.wrapper}>{children}</div>
    </>
  );
}
