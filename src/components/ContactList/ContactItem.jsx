import PropTypes from 'prop-types';
import { ItemContacts, ContactsInfo, ContactsBtn } from './ContactList.styled';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ItemContacts>
      <ContactsInfo>{name}</ContactsInfo>
      <ContactsInfo>{number}</ContactsInfo>
      <ContactsBtn type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </ContactsBtn>
    </ItemContacts>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
