import React from 'react';
import * as _ from 'lodash';
import { render } from 'react-dom';
import { gql, useQuery } from "@apollo/client";
import {useDispatch} from 'react-redux';
import { setCountryState } from '../store/actions/countryActions';

const GET_COUNTRIES_LIST = gql`
    query {
      Country {
        name
        flag {
          emoji
        }
      }
    }
`;

const CountrySelector = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES_LIST);
  const dispatch = useDispatch();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const onOptionSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    dispatch(setCountryState(value));
  }

  const countryData = _.get(data, 'Country', []);
  const countriesList = _.map(countryData, item => ({
    name: item.name,
    emoji: _.get(item, 'flag.emoji', ''),
  }));
  const countryOptions = _.map(countriesList, item => (
    <option
      key={item.name}
      value={item.name}
    >
      {`${item.emoji} ${item.name}`}
    </option>
  ));

  return (
    <div>
      <select
        defaultValue="default"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onOptionSelected(e)}
      >
        <option value="default" disabled>Select a country</option>
        {countryOptions}
      </select>
    </div>
  );
}

export default CountrySelector;
