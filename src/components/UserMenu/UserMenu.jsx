import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  return (
    <div className={css.wrapper}>
      <h4>Welcome, {user.name}</h4>
      <button type="button" className={css.btn} onClick={handleLogOut}>
        Log out
      </button>
    </div>
  );
}
