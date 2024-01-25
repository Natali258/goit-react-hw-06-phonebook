import React, { useState } from 'react';
import s from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, addContact } from '../../redux/contacts/slice';
import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
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

    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={addFormContact} className={s.forma}>
        <span className={s.label}>Name</span>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          name="name"
          required
          className={s.input}
        />
        <span className={s.label}>Number</span>
        <input
          value={number}
          onChange={e => setNumber(e.target.value)}
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
