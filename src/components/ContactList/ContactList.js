import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts && contacts.map(contact => (
          <li key={contact.id}>
            {contact.name} - {contact.number}
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
