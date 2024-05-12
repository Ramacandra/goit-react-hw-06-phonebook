import React from 'react';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/contactSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterForm = event => {
    dispatch(updateFilter(event.target.value.toLowerCase()));
  };

  return (
    <div className="submit-form flex mb-2">
      <label htmlFor="find">Find contacts by Name</label>
      <input
        onChange={handleFilterForm}
        type="text"
        name="query"
        placeholder="John Doe..."
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </div>
  );
};

export default Filter;

