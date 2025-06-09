import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const list = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={css.list}>
        {list.map((contact) => {
          return (
            <li key={contact.id} className={css.liWrapper}>
              <Contact
                name={contact.name}
                number={contact.number}
                id={contact.id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
