import { combineReducers, Reducer } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History, LocationState } from 'history';
import { sampleSlice } from './sample';

export const rootReducer = (history: History): Reducer =>
  combineReducers({
    router: connectRouter(history) as Reducer<RouterState<LocationState>>,
    sampleSlice: sampleSlice.reducer,
  });
