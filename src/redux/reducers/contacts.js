import { ADD_CONTACT } from '../types';

const initialState = [];

const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload];

    default:
      return state;
  }
};

export default contactsReducer;
