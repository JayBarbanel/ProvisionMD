import React, { useState } from 'react';
import {
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';
import Home from './pages/Home'
import Refill from './pages/Refill'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers, 
      authorithazion: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router exact path='/'>
      <Home/>
    </Router>

//  <Router exact path='/refill'>
//     <Refill/>
    </Router>
</ApolloProvider>
  );
}

export default App;
