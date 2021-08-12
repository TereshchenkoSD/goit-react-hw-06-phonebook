import { ADD_CONTACT, DELETE_CONTACT, CHANGE_FILTER } from '../types';

const contactsInitialState = [];

export const contactsReducer = (
  state = contactsInitialState,
  { type, payload },
) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload];

    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const filterInitialState = '';

export const filterReducer = (
  state = filterInitialState,
  { type, payload },
) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};
