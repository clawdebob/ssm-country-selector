import React from 'react';
import { RootState } from '../store/rootReducer';
import {connect} from 'react-redux';

export interface CountryDetailsProps {
  currentCountry: string;
}

const CountryDetails = (props: CountryDetailsProps) => {
  return (
    <div>
      {props.currentCountry}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  currentCountry: state.currentCountry.country,
});

export default connect(mapStateToProps)(CountryDetails);
