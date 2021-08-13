import { createAction } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

// export const addContact = (name, number) => ({
//   type: ADD_CONTACT,
//   payload: {
//     id: nanoid(),
//     name,
//     number,
//   },
// });

export const addContact = createAction('contacts/Add', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});

export const deleteContact = createAction('contacts/Delete');

// export const deleteContact = contactId => ({
//   type: DELETE_CONTACT,
//   payload: contactId,
// });

export const changeFilter = createAction('filter/Change');

// export const changeFilter = value => ({
//   type: CHANGE_FILTER,
//   payload: value,
// });
