import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

const initialValues = {
  email: "",
  password: "",
};

const FeedbackSchema = Yup.object().shape({
  email: Yup.string()
    .min(8, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
});

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <ul className={css.list}>
          <li>
            <label htmlFor="email" className={css.label}>
              Email
            </label>
            <Field
              type="text"
              name="email"
              id="email"
              className={css.field}
              autoComplete="on"
            />
            <ErrorMessage name="email" component="span" className={css.error} />
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
          Log In
        </button>
      </Form>
    </Formik>
  );
}
