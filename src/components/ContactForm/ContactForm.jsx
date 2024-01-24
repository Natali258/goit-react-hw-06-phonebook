import React from 'react';
import s from './ContactForm.module.css';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectName,
  selectNumber,
  changeName,
  changeNumber,
} from '../../redux/form/slice';
import { selectContacts, addContact } from '../../redux/contacts/slice';
import { nanoid } from '@reduxjs/toolkit';
export const ContactForm = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const number = useSelector(selectNumber);
  const contacts = useSelector(selectContacts);

  const addFormContact = e => {
    e.preventDefault();
    const isExist = contacts.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      })
    );
  };
  return (
    <div>
      <form onSubmit={addFormContact} className={s.forma}>
        <span className={s.label}>Name</span>
        <input
          value={name}
          onChange={e => dispatch(changeName(e.target.value))}
          type="text"
          name="name"
          required
          className={s.input}
        />
        <span className={s.label}>Number</span>
        <input
          value={number}
          onChange={e => dispatch(changeNumber(e.target.value))}
          type="tel"
          name="number"
          required
          className={s.input}
        />
        <button type="submit" className={s.dtnAdd}>
          Add contact
        </button>
      </form>
    </div>
  );
};
