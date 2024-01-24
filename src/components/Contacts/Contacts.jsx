import s from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/contacts/slice';
import { deleteContact } from '../../redux/contacts/slice';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contactsItems = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getFilterValue = () => {
    return contactsItems.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const contacts = getFilterValue();
  return (
    <div>
      <ul className={s.contactsList}>
        {contacts.map(contact => (
          <li className={s.contactLi} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              onClick={() => dispatch(deleteContact(contact.id))}
              className={s.btnLi}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
