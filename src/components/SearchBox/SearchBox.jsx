import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const inputValue = e.target.value;
    dispatch(changeFilter(inputValue));
    console.log(inputValue);
  };

  return (
    <div className={css.searchWrapper}>
      <label htmlFor="searchValue">Find contacts by name</label>
      <input
        type="text"
        id="searchValue"
        name="searchValue"
        className={css.input}
        onChange={handleSearch}
      />
    </div>
  );
}
