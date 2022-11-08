import { useRef, useState } from 'react';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container } from './App.styled';

import { useEffect } from 'react';

const STORAGE_KEY ='contacts'
let contactList =[
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]
export const App = () => {
  const [contacts, setContacts] = useState (contactList);
  const [filter, setFilter] = useState('');
  const firstRender = useRef(true)
  

  const hendlerAddContact = newContact => {
    
    if (contacts.filter(({ name }) => name === newContact.name).length !== 0) {
      alert( `${newContact.name} is already in contacts!`);
      return;
    }
   
    setContacts(state=> [newContact, ...state]);
  };

  const onDeleteContact = id => {
    setContacts(state => (
      state.filter(contact => contact.id !== id)
    ));
  };
  const handleFilterChange = filter => {
    setFilter(filter);
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter) 
    );
  };
  useEffect(() => {
    const contacts = localStorage.getItem(STORAGE_KEY);
    const parsedContacts = JSON.parse(contacts)
    if (parsedContacts) {
      setContacts( parsedContacts);
    }
  },[])
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  },[contacts])


  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm onAddContact={hendlerAddContact} />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <> <Filter
          filter={filter}
          onFilterChange={handleFilterChange}
        />

        <ContactList
          contacts={filterContacts()}
          onDeleteContact={onDeleteContact}
            />
          </>) : (<p>You phonebook is empty! Add your first contact</p>)} 
       
      </Section>
    </Container>
  );
}