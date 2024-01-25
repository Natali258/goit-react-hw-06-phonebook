// import { createReducer } from '@reduxjs/toolkit';
// import {
//   deleteContact,
//   addContact,
//   changeName,
//   changeNumber,
//   changeFilter,
// } from './actions';

// const initialState = {
//   name: '',
//   number: '',
//   contacts: JSON.parse(window.localStorage.getItem('userKey')) ?? [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

// export const formReducer = createReducer(initialState, builder => {
//   builder

//     .addCase(deleteContact, (state, action) => {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     })
//     .addCase(addContact, (state, action) => {
//       state.contacts = [...state.contacts, action.payload];
//     })
//     .addCase(changeName, (state, action) => {
//       state.name = action.payload;
//     })
//     .addCase(changeNumber, (state, action) => {
//       state.number = action.payload;
//     })
//     .addCase(changeFilter, (state, action) => {
//       state.filter = action.payload;
//     });
// });

// export const formsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'deleteContact':
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     case 'addContact':
//       return { ...state, contacts: [...state.contacts, action.payload] };
//     case 'changeName':
//       return { ...state, name: action.payload };
//     case 'changeNumber':
//       return { ...state, number: action.payload };
//     case 'changeFilter':
//       return { ...state, filter: action.payload };

//     default:
//       return state;
//   }
// };
