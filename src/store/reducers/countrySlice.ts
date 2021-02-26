import { StoreAction } from "../types/action";

export interface StoreCountryState {
  country: string;
}

const initialState = {
  country: '',
};

const countryReducer = (state: StoreCountryState = initialState, action: StoreAction): StoreCountryState => {
  switch (action.type) {
    case 'setCountryState':
      return {
        ...state,
        country: action.payload
      };
    default:
      return state;
  }
};

export default countryReducer;
