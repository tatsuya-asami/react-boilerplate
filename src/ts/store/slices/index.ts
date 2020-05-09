import { combineReducers } from 'redux';
import { sampleSlice } from './sample';

export const rootReducer = combineReducers({
  sampleSlice: sampleSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
