import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import { nanoid } from 'nanoid';
import './ContactForm.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name: event.target.name.value,
      number: event.target.number.value,
    };
    dispatch(addContact(newContact));
    event.target.reset();
  };

  return (
    <div>
      <form className="submit-form" onSubmit={handleSubmit}>
      <div className="flex mb-2">
            <label>Name</label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <div className="flex mb-2">
            <label htmlFor="number">Number</label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
          <div className="flex mb-2">
            <button className="btn btn-submit">Add Contact</button>
          </div>
      </form>
    </div>
  );
};

export default ContactForm;

