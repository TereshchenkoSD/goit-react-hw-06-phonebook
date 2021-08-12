import { nanoid } from 'nanoid';
import { ADD_CONTACT } from '../types';

const addContact = (name, number) => ({
  type: ADD_CONTACT,
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

export default addContact;
