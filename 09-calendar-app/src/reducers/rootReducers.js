import { combineReducers } from 'redux';

// Reducers
import { uiReducer } from './uiReducers';
import { calendarReducer } from './calendarReducer';

export const rootReducers = combineReducers({
  ui: uiReducer,
  calendar: calendarReducer
})