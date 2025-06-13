import Modal from "react-modal";
import toast, { Toaster } from "react-hot-toast";
import { selectDeleteModalIsOpen } from "../../redux/contacts/selectors";
import { closeDeleteModal } from "../../redux/contacts/slice";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import css from "./DeleteModal.module.css";

Modal.setAppElement("#root");

export default function DeleteModal({ id }) {
  const dispatch = useDispatch();

  const deleteModalIsOpen = useSelector(selectDeleteModalIsOpen);

  return (
    <div>
      <Modal
        isOpen={deleteModalIsOpen}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <div className={css.modalWrapper}>
          <strong>Delete contact?</strong>
          <div className={css.btnWrapper}>
            <button
              type="button"
              onClick={() =>
                dispatch(deleteContact(id))
                  .unwrap()
                  .then(() => {
                    dispatch(closeDeleteModal());
                  })
                  .then(() => toast.success("Successfully deleted"))
              }
              className={css.btn}
            >
              <IoCheckmarkSharp size="22" color="rgb(9, 90, 33)" />
            </button>
            <button
              type="button"
              onClick={() => {
                dispatch(closeDeleteModal());
              }}
              className={css.btn}
            >
              <IoClose size="22" color="rgb(173, 14, 14)" />
            </button>
          </div>
        </div>
      </Modal>
      <Toaster />
    </div>
  );
}
