import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import AppBar from "./AppBar/AppBar";
// import css from "./App.module.css";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));

export default function App() {
  return (
    <Suspense fallback={null}>
      <AppBar />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "./redux/contacts/operations";
// import { useEffect } from "react";
// import ContactForm from "./components/ContactForm/ContactForm";
// import SearchBox from "./components/SearchBox/SearchBox";
// import ContactList from "./components/ContactList/ContactList";
// import css from "./App.module.css";
// import { BeatLoader } from "react-spinners";
// import { selectLoading, selectError } from "./redux/contacts/selectors";

// export default function App() {
//   const dispatch = useDispatch();
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className={css.appWrapper}>
//       <h1 className={css.header}>Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       {loading && !error && <b>Try reloading the page...</b> && (
//         <BeatLoader color="#4a0f73" size={19} />
//       )}
//       {error && <b>Try reloadig the page...</b>}
//       <ContactList />
//     </div>
//   );
// }
