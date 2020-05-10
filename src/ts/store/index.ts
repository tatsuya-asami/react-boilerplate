import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { rootReducer } from './slices';

export const history = createBrowserHistory();

export const store = configureStore({
  reducer: rootReducer(history),
  middleware: [...getDefaultMiddleware(), routerMiddleware(history)] as const,
});

export type RootState = ReturnType<typeof store.getState>;
