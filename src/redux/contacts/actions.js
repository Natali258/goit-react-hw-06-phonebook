import { createAction } from '@reduxjs/toolkit';

export const deleteContact = createAction('deleteContact');
export const addContact = createAction('addContact');
export const changeName = createAction('changeName');
export const changeNumber = createAction('changeNumber');
export const changeFilter = createAction('changeFilter');
