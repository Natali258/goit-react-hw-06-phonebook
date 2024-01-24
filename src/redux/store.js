import { configureStore } from '@reduxjs/toolkit';
import { phoneBookReducer } from './contacts/slice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { formReducer } from './form/slice';

const persistConfig = {
  key: 'contactsItem',
  storage,
};

const persistedReducer = persistReducer(persistConfig, phoneBookReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    form: formReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export let persistor = persistStore(store);
