import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  ContactsForm,
  Label,
  InputContacts,
  BoxImg,
  Img,
  Wrap,
  FormBtn,
} from './ContactFotm.styled';
import phonboock from '../../icon/phonboock.png';

export function ContactForm({onAddContact}) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  
  const inputChange = evt => {
   switch (evt.target.name) {
    case 'name':
      setName(evt.target.value)
      break;
    case 'number':
      setNumber(evt.target.value)
       break;
     
     default:
       return
   }
  };
  
  const hendlerAddContact = evt => {
    evt.preventDefault();
   
    const contact = {
      id: nanoid(), name, number,
    }
    onAddContact(contact);
    reset();
  };
   const reset = () => {
     setName('')
     setNumber('')
  };
  
    return (
      <ContactsForm onSubmit={hendlerAddContact}>
        <BoxImg>
          <Img src={phonboock} alt="phonebook" />
        </BoxImg>
        <Wrap>
          <Label htmlFor="name">Name</Label>
          <InputContacts
            type="text"
            name="name"
            value={name}
            id="name"
            onChange={inputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Label htmlFor="number">Number</Label>
          <InputContacts
            type="tel"
            name="number"
            value={number}
            id="number"
            onChange={inputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <FormBtn type="submit">Add contact</FormBtn>
        </Wrap>
      </ContactsForm>
    );
  }


ContactForm.propTypes = {
  onAddContact: PropTypes.func,
};
