import {combineReducers} from 'redux';
import countryReducer from './reducers/countrySlice';

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  currentCountry: countryReducer,
});
