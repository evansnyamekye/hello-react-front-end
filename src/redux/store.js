import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greetings/greetingsSlice';

//create a store

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

export default store;
