import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import ContactItem from '../contactItem/contactItem';
function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p className={css.info}>
            <ContactItem name={name} tel={number} />
          </p>
          <button
            className={css.btn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
