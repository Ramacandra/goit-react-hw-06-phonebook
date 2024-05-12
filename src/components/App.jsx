import React from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;




