import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BiSolidPhone } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <div className={css.cardWrapper}>
      <div>
        <p className={css.text}>
          <FaUser size="14" color="rgb(9, 90, 33)" padding="10px" />
          {name}
        </p>
        <p className={css.text}>
          <BiSolidPhone size="18" color="rgb(9, 90, 33)" />
          {number}
        </p>
      </div>
      <button
        type="button"
        className={css.btn}
        onClick={() => dispatch(deleteContact(id))}
      >
        <MdDeleteForever size="22" color="rgb(9, 90, 33)" />
      </button>
    </div>
  );
}
