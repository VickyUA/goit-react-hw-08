import { useDispatch } from "react-redux";
import { openDeleteModal, openEditModal } from "../../redux/contacts/slice";
import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BiSolidPhone } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <>
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
        <div className={css.btnWrapper}>
          <button
            type="button"
            className={css.btn}
            onClick={() => dispatch(openEditModal({ name, number, id }))}
          >
            <FaUserEdit size="20" color="rgb(9, 90, 33)" />
          </button>
          <button
            type="button"
            className={css.btn}
            onClick={() => dispatch(openDeleteModal())}
          >
            <MdDeleteForever size="22" color="rgb(9, 90, 33)" />
          </button>
        </div>
      </div>
      <DeleteModal id={id} />
      <EditModal />
    </>
  );
}
