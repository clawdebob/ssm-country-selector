import {combineReducers} from 'redux';
import countryReducer from './reducers/countrySlice';

export const rootReducer = combineReducers({
  currentCountry: countryReducer,
});
