import { createReducer } from '@reduxjs/toolkit';

import { addContact, deleteContact, changeFilter } from '../actions/contacts';

export const contactsReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

// const contactsInitialState = [];

// export const contactsReducer = (
//   state = contactsInitialState,
//   { type, payload },
// ) => {
//   switch (type) {
//     case ADD_CONTACT:
//       return [...state, payload];

//     case DELETE_CONTACT:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };

export const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

// const filterInitialState = '';

// export const filterReducer = (
//   state = filterInitialState,
//   { type, payload },
// ) => {
//   switch (type) {
//     case CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };
