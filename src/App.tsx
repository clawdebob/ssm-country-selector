import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import CountrySelector from './containers/country-selector';
import CountryDetails from './containers/country-details';

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com/',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <CountrySelector/>
        <CountryDetails/>
      </div>
    </ApolloProvider>
  );
}

export default App;
