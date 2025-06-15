import Modal from "react-modal";
import toast, { Toaster } from "react-hot-toast";
import {
  selectEditModalIsOpen,
  selectItemToEdit,
} from "../../redux/contacts/selectors";
import { closeEditModal } from "../../redux/contacts/slice";
import { useDispatch, useSelector } from "react-redux";
import { editContact } from "../../redux/contacts/operations";
import css from "./EditModal.module.css";
import { Formik, Form, Field } from "formik";
import { ErrorMessage } from "formik";
import { FaUser } from "react-icons/fa";
import { BiSolidPhone } from "react-icons/bi";
import * as Yup from "yup";

Modal.setAppElement("#root");

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(23, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(5, "Too Short!")
    .max(23, "Too Long!")
    .required("Required"),
});

export default function EditModal() {
  const dispatch = useDispatch();

  const editModalIsOpen = useSelector(selectEditModalIsOpen);
  const itemToEdit = useSelector(selectItemToEdit);

  const initialValues = {
    name: itemToEdit.name,
    number: itemToEdit.number,
  };

  const handleSubmit = (values, actions) => {
    const updatedContact = { id: itemToEdit.id, value: values };
    dispatch(editContact(updatedContact))
      .unwrap()
      .then(() => toast.success("Successfully edited"));
    dispatch(closeEditModal());
    actions.resetForm();
  };

  return (
    <div>
      <Modal
        isOpen={editModalIsOpen}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <div className={css.modalWrapper}>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
          >
            <Form className={css.form}>
              <ul className={css.list}>
                <li>
                  <label htmlFor="name" className={css.label}>
                    <FaUser size="14" color="rgb(9, 90, 33)" padding="10px" />
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    className={css.field}
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="name"
                    component="span"
                    className={css.error}
                  />
                </li>
                <li>
                  <label htmlFor="number" className={css.label}>
                    <BiSolidPhone size="18" color="rgb(9, 90, 33)" />
                    Number
                  </label>
                  <Field
                    type="text"
                    name="number"
                    id="number"
                    className={css.field}
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="number"
                    component="span"
                    className={css.error}
                  />
                </li>
              </ul>
              <button type="submit" className={css.btn}>
                Edit contact
              </button>
            </Form>
          </Formik>
        </div>
      </Modal>
      <Toaster />
    </div>
  );
}
