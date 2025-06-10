import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./ContactsPage.module.css";
import { BeatLoader } from "react-spinners";
import { selectLoading, selectError } from "../../redux/contacts/selectors";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.appWrapper}>
      <PageTitle>Contacts</PageTitle>
      <ContactForm />
      <SearchBox />
      {loading && !error && <b>Try reloading the page...</b> && (
        <BeatLoader color="#4a0f73" size={19} />
      )}
      {error && <b>Try reloadig the page...</b>}
      <ContactList />
    </div>
  );
}
