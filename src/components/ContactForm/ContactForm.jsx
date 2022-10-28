import React, { Component } from 'react';
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
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInputId = nanoid();
  numberInputId = nanoid();

  inputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  hendlerAddContact = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    const { onAddContact } = this.props;
    onAddContact({ id: nanoid(), name, number });
    this.reset();
  };
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <ContactsForm onSubmit={this.hendlerAddContact}>
        <BoxImg>
          <Img src={phonboock} alt="phonebook" />
        </BoxImg>
        <Wrap>
          <Label htmlFor="name">Name</Label>
          <InputContacts
            type="text"
            name="name"
            value={this.state.name}
            id="name"
            onChange={this.inputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Label htmlFor="number">Number</Label>
          <InputContacts
            type="tel"
            name="number"
            value={this.state.number}
            id="number"
            onChange={this.inputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <FormBtn type="submit">Add contact</FormBtn>
        </Wrap>
      </ContactsForm>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func,
};
