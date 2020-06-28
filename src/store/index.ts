import { configureStore } from '@reduxjs/toolkit';
import reducer, { TestSSRState } from './reducer';

interface MyWindow extends Window {
  __INITIAL_STATE__: TestSSRState,
}
declare let window: MyWindow;

const initialState = window.__INITIAL_STATE__;

const store = configureStore({
  reducer,
  preloadedState: initialState,
});

export default store;
