import { Formik, Form, Field } from "formik";
// import { FaUser } from "react-icons/fa";
import css from "./RegistrationForm.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
// import { useDispatch } from "react-redux";
// import { addContact } from "../../redux/contacts/operations";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .min(8, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
});

export default function RegistrationPage() {
  // const dispatch = useDispatch();

  // const handleSubmit = (values, actions) => {
  //   dispatch(addContact(values));
  //   actions.resetForm();
  // };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <ul className={css.list}>
            <li>
              <label htmlFor="username" className={css.label}>
                {/* <FaUser size="14" color="rgb(9, 90, 33)" padding="10px" /> */}
                Username
              </label>
              <Field
                type="text"
                name="username"
                id="username"
                className={css.field}
                autoComplete="off"
              />
              <ErrorMessage
                name="username"
                component="span"
                className={css.error}
              />
            </li>
            <li>
              <label htmlFor="email" className={css.label}>
                Email
              </label>
              <Field
                type="text"
                name="email"
                id="email"
                className={css.field}
                autoComplete="off"
              />
              <ErrorMessage
                name="email"
                component="span"
                className={css.error}
              />
            </li>
            <li>
              <label htmlFor="password" className={css.label}>
                Password
              </label>
              <Field
                type="text"
                name="password"
                id="password"
                className={css.field}
                autoComplete="off"
              />
              <ErrorMessage
                name="password"
                component="span"
                className={css.error}
              />
            </li>
          </ul>
          <button type="submit" className={css.btn}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
