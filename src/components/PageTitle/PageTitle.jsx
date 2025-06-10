import css from "./PageTitle.module.css";

export default function PageTitle({ children }) {
  return (
    <div>
      <h1 className={css.header}>{children}</h1>
    </div>
  );
}
